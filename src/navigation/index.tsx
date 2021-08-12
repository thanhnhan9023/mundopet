import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import {navigationRef} from './NavigationServices';

const index = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default index;
