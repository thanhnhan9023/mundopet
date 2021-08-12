import {
  NavigatorScreenParams,
  ParamListBase,
  RouteConfig,
} from '@react-navigation/native';

export type RootStackRoutes = {
  BottomTab: NavigatorScreenParams<BottomTabRoutes>;
  Login: undefined;
  Profile: undefined;
};

export type RouteNames = keyof RootStackRoutes;

export type BottomTabRoutes = {
  Home: undefined;
  Purchase: undefined;
  Payment: undefined;
  Advise: undefined;
  Account: undefined;
  Profile: undefined;
};

export type ScreenOptions<T extends ParamListBase, K extends {}> = {
  [screenName: string]: RouteConfig<T, keyof T, any, K, any>['options'];
};
