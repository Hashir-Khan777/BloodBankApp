import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';

const NearByDonors = () => {
  const Donors = [
    {
      id: '1',
      name: 'Hashir',
      age: 17,
      location: 'Karachi',
      bloodType: 'AB+',
    },
    {
      id: '2',
      name: 'Hashir',
      age: 17,
      location: 'Karachi',
      bloodType: 'AB+',
    },
    {
      id: '3',
      name: 'Hashir',
      age: 17,
      location: 'Karachi',
      bloodType: 'AB+',
    },
    {
      id: '4',
      name: 'Hashir',
      age: 17,
      location: 'Karachi',
      bloodType: 'AB+',
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="red" />
      <View>
        <Text style={Styles.bloodbankHeading}>Near by Donors</Text>
      </View>
      <View>
        <FlatList
          data={Donors}
          renderItem={({item}) => {
            return (
              <View key={item.id} style={Styles.banksItems}>
                <Text style={Styles.bankNameText}>{item.name}</Text>
                <Text style={Styles.bankNameLocation}>{item.age}</Text>
                <Text style={Styles.bankNameLocation}>{item.location}</Text>
                <Text style={Styles.bankNameLocation}>{item.bloodType}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  bloodbankHeading: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
  banksItems: {
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 4,
  },
  bankNameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bankNameLocation: {
    color: '#fff',
  },
});

export default NearByDonors;
