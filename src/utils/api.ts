import {useSelector} from 'react-redux';
import axios, {AxiosInstance} from 'axios';
import Configs from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api: AxiosInstance = axios.create({
  baseURL: Configs.API_SERVER_URL,
  timeout: 180000,
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('Token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

api.interceptors.response.use(
  response => response.data,
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 400 &&
      error.response.data.messge === 'Token is not valid'
    ) {
      const token = await AsyncStorage.getItem('RefreshToken');
      if (token != null) {
        console.log('vao call api');
        let data = {
          RefreshToken: token,
        };
        api
          .post('https://apioreo.herokuapp.com/api/User/RefreshToken', data)
          .then(res => {
            AsyncStorage.setItem('Token', res.token);
            api.defaults.headers['Authorization'] = 'Bearer ' + res.token;
            originalRequest.headers['Authorization'] = 'Bearer ' + res.token;
            return api(originalRequest);
          })
          .catch(err => console.log(err));
      }
    }
    return Promise.reject(error);
  },
);

export default api;
