import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';

const NearByBloodBanks = () => {
  const [BloodBanks, setBloodBanks] = useState(null);

  useEffect(async () => {
    await Axios.get('http://192.168.10.113:4000/api/users/banks').then(
      ({data}) => {
        setBloodBanks(data);
        console.log(BloodBanks);
      },
    );
    return () => {
      //
    };
  }, [Axios, setBloodBanks]);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="red" />
      <View>
        <Text style={Styles.bloodbankHeading}>Near by Blood Banks</Text>
      </View>
      <View>
        {BloodBanks !== null ? (
          <FlatList
            data={BloodBanks}
            renderItem={({item}) => {
              return (
                <TouchableOpacity key={item._id} activeOpacity={0.6}>
                  <View style={Styles.banksItems}>
                    <Text style={Styles.bankNameText}>{item.CompanyName}</Text>
                    <Text style={Styles.bankNameLocation}>{item.address}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <Text>There are no blood banks registered</Text>
        )}
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
