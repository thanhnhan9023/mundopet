import produce from 'immer';
import TypeAction from '../actions/ActionAuth/TypeContStan';
import {UserState} from '../Types/user';

const INITIAL_STATE = {
  isLoading: false,
  isAuth: false,
  errorCode: null,
  error: null,
  token: null,
};

const UserReducer = produce((state: UserState = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case TypeAction.Login_Account_Request:
      state.isLoading = true;
      break;
    case TypeAction.Login_Account_Success:
      state.isLoading = false;
      state.isAuth = true;
      state.token = payload;
      break;
    case TypeAction.Login_Account_Error:
      state.isLoading = false;
      state.error = payload;
      break;
    case TypeAction.Login_Account_Request:
      break;
    case TypeAction.Clear_Error:
      state.error = null;
      break;
    case TypeAction.Logout_Account:
      state.isAuth = false;
      state.token = null;
      break;
    default:
      return state;
  }
});

export default UserReducer;
