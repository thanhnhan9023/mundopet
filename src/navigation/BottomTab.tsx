import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomTabRoutes, ScreenOptions} from './type';
import React, {useState, useEffect} from 'react';
import MyTarBar from './component/MyTarBar';
import {bottomTabScreens} from './router';
import {useTheme} from '../theme';
import Icon, {Icons} from '../../assets/icons';
import {Image} from 'react-native';
import Images from '../../assets/images';
import {useSelector, useDispatch} from 'react-redux';
import {Account} from '../Screen/BottomTab';
import Profile from '../Screen/Auth/Profile';
import Utils from '../utils/Utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator<BottomTabRoutes>();

const BottomTab = () => {
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const Token = useSelector((state: any) => state.user.token);
  // const [Token, setToken] = useState('');
  const {Colors, Fonts} = useTheme();
  const getTabBarIcon = (name: string, type: any, focused: any) => (
    <Icon
      name={name}
      type={type}
      size={22}
      color={focused ? Colors.orange : Colors.grayLight}
    />
  );
  const screenOptions: ScreenOptions<
    BottomTabRoutes,
    BottomTabNavigationOptions
  > = {
    Home: {
      tabBarLabel: 'Trang Chủ',
      tabBarIcon: focused => getTabBarIcon('home', Icons.AntDesign, focused),
    },
    Purchase: {
      tabBarLabel: 'Mua Hàng',
      tabBarIcon: focused =>
        getTabBarIcon('shoppingcart', Icons.AntDesign, focused),
    },
    Payment: {
      tabBarLabel: '',
      tabBarIcon: focused => {
        return (
          <Image
            style={{
              width: focused ? 60 : 50,
              height: focused ? 60 : 50,
              resizeMode: 'cover',
              position: 'absolute',
              top: focused ? -20 : -12,
            }}
            source={
              focused
                ? Images.IconBottomTab.icQrCodeActive
                : Images.IconBottomTab.icQrCodeDeActive
            }
          />
        );
      },
    },
    Advise: {
      tabBarLabel: 'Tư Vấn',
      tabBarIcon: focused =>
        getTabBarIcon('headphones', Icons.Feather, focused),
    },
    Account: {
      tabBarLabel: 'Tài Khoản',
      tabBarIcon: focused =>
        getTabBarIcon('account', Icons.MaterialCommunityIcons, focused),
    },
    Profile: {
      tabBarLabel: 'Tài Khoản',
      tabBarIcon: focused =>
        getTabBarIcon('account', Icons.MaterialCommunityIcons, focused),
    },
  };

  // const _GetToken = async () => {
  //   await AsyncStorage.getItem('Token').then(val => {
  //     setToken(val + '');
  //   });
  // };

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}
      tabBar={props => <MyTarBar {...props} />}>
      {bottomTabScreens.map(({name, component}: any) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={screenOptions[name]}
        />
      ))}
      {Token != null ? (
        <Tab.Screen
          name={'Profile'}
          component={Profile}
          options={screenOptions['Profile']}
        />
      ) : (
        <Tab.Screen
          name={'Account'}
          component={Account}
          options={screenOptions['Account']}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomTab;
