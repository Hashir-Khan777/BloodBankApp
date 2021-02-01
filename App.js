/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/navigations/StackNavigation';
import {Provider} from 'react-redux';
import Store from './src/store/Store';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <StackNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
