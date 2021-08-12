import {LoginRequestPayload} from '../../Types/user';
import TypeAction from './TypeContStan';

export const LoginAccountRequest = (payload: LoginRequestPayload) => ({
  type: TypeAction.Login_Account_Request,
  payload,
});

export const LoginAccountSuccess = (payload: any) => ({
  type: TypeAction.Login_Account_Success,
  payload,
});

export const LoginAccountError = (payload: any) => ({
  type: TypeAction.Login_Account_Error,
  payload,
});

export const LoginClearError = () => ({
  type: TypeAction.Clear_Error,
});
export const LogOutRequest = () => ({
  type: TypeAction.Logout_Account_Request,
});

export const LogOut = () => ({
  type: TypeAction.Logout_Account,
});
