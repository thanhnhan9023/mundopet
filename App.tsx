import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/index';
import {persitor, store} from './store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persitor}>
        <SafeAreaProvider>
          <MainNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
