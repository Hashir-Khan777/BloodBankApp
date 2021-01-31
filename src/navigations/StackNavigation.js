import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/Signin';
import Register from '../screens/Register';
import {TopNavigation} from './TopNavigation';
import Donate from '../screens/Donate';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TopNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Donate"
        component={Donate}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export {StackNavigation};
