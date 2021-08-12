import {RootStackRoutes} from './type';
import {BottomTab} from '../Screen';
import BottomTabNavigation from './BottomTab';
import Login from '../Screen/Auth/Login';
import Profile from '../Screen/Auth/Profile';

export const commonScreens = {
  BottomTab: BottomTabNavigation,
};
export const AuthScreens = [{component: Login, name: 'Login'}];

export const bottomTabScreens = [
  {component: BottomTab.Home, name: 'Home'},
  {component: BottomTab.Purchase, name: 'Purchase'},
  {component: BottomTab.Payment, name: 'Payment'},
  {component: BottomTab.Advise, name: 'Advise'},
];
