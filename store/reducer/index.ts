import {UserState} from './../Types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import user from './user';
import {persistReducer} from 'redux-persist';
import UserReducer from './user';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['token'],
};

const RootReducer = combineReducers({
  user: persistReducer(authPersistConfig, UserReducer as any),
});

export default RootReducer;
