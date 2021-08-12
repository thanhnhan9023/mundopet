import Configs from 'react-native-config';

import api from '../utils/api';
import {LoginRequest} from './types/user';

export const LoginUser = (data: LoginRequest) => {
  return api
    .post(Configs.API_SERVER_URL + 'api/User/LoginUser', data)
    .then(res => res)
    .catch(err => err.response.data);
};
