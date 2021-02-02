import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NearByBloodBanks from '../screens/NearByBloodBanks';
import NearByDonors from '../screens/NearByDonors';
import Donation from '../screens/Donation';

const Tab = createMaterialTopTabNavigator();
const TopNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: 'red',
        },
        inactiveTintColor: 'rgba(255,255,255,0.6)',
        activeTintColor: 'rgba(255,255,255,1)',
        labelStyle: {
          flex: 1,
          fontSize: 13,
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        },
        indicatorStyle: {
          borderBottomWidth: 2,
          borderBottomColor: '#fff',
          borderRadius: 3,
        },
      }}>
      <Tab.Screen name="Blood banks" component={NearByBloodBanks} />
      <Tab.Screen name="Donors" component={NearByDonors} />
      <Tab.Screen name="Donations" component={Donation} />
    </Tab.Navigator>
  );
};

export {TopNavigation};
