import React from 'react';
// import { RootStackRoutes } from './type';
// import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import {RootStackRoutes, ScreenOptions} from './type';
import {AuthScreens, commonScreens} from './router';
import Login from '../Screen/Auth/Login';
import Profile from '../Screen/Auth/Profile';

const RootStackSt = createStackNavigator<RootStackRoutes>();

const screenOptions: ScreenOptions<RootStackRoutes, StackNavigationOptions> = {
  BottomTab: {headerShown: false},
};
const RootStack = () => {
  return (
    <RootStackSt.Navigator initialRouteName="BottomTab">
      <RootStackSt.Group>
        {Object.entries({
          ...commonScreens,
        }).map(([name, component]: any) => (
          <RootStackSt.Screen
            key={name}
            name={name}
            component={component}
            options={screenOptions[name]}
          />
        ))}
      </RootStackSt.Group>
      <RootStackSt.Group screenOptions={{headerShown: false}}>
        <RootStackSt.Screen name={'Login'} component={Login} />
      </RootStackSt.Group>
    </RootStackSt.Navigator>
  );
};

export default RootStack;
