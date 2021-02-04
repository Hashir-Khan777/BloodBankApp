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

const NearByBloodBanks = (props) => {
  const BloodBanks = [
    {
      id: '1',
      bank: 'Saylani',
      location: 'Karachi',
    },
    {
      id: '2',
      bank: 'Saylani',
      location: 'Karachi',
    },
    {
      id: '3',
      bank: 'Saylani',
      location: 'Karachi',
    },
    {
      id: '4',
      bank: 'Saylani',
      location: 'Karachi',
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="red" />
      <View>
        <Text style={Styles.bloodbankHeading}>Near by Blood Banks</Text>
      </View>
      <View>
        <FlatList
          data={BloodBanks}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.6}
                onPress={() =>
                  props.navigation.navigate(`BloodBanks${item.id}`)
                }>
                <View style={Styles.banksItems}>
                  <Text style={Styles.bankNameText}>{item.bank}</Text>
                  <Text style={Styles.bankNameLocation}>{item.location}</Text>
                </View>
              </TouchableOpacity>
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

export default NearByBloodBanks;
