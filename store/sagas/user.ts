import AsyncStorage from '@react-native-async-storage/async-storage';
import Configs from 'react-native-config';
import {ActionPayload} from './common';
import {call, put, takeLatest} from 'redux-saga/effects';
import TypeAction from '../actions/ActionAuth/TypeContStan';
import {LoginUser} from '../../src/services/User';
import {LoginRequestPayload} from '../Types/user';
import {
  LoginAccountError,
  LoginAccountRequest,
  LoginAccountSuccess,
  LogOut,
} from '../actions/ActionAuth/AuthAction';

function* LoginAccount(action: ActionPayload<LoginRequestPayload>): any {
  const {payload} = action;
  const data = {
    Email: payload.Email,
    Password: payload.Password,
  };
  const res = yield call(LoginUser, data);
  if (res.messge === undefined) {
    AsyncStorage.setItem('Token', res.Acccesstoken);
    AsyncStorage.setItem('RefreshToken', res.RefreshToken);
    yield put(LoginAccountSuccess(res.RefreshToken));
  } else {
    yield put(LoginAccountError(res));
  }
}
function* LogOutAccount(action: ActionPayload<LoginRequestPayload>): any {
  yield put(LogOut());
}

const user = [
  takeLatest(TypeAction.Login_Account_Request, LoginAccount),
  takeLatest(TypeAction.Logout_Account_Request, LogOutAccount),
];

export default user;
