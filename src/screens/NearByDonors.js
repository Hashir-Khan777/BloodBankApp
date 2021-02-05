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
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const NearByDonors = () => {
  const [Donors, setDonors] = useState(null);

  useEffect(async () => {
    const user = await AsyncStorage.getItem('user');
    await Axios.get('http://192.168.10.113:4000/api/users/donate').then(
      ({data}) => {
        setDonors(data);
        if (data._id == JSON.parse(user)._id) {
          data.filter((x) => x._id !== Donors);
        }
      },
    );
  }, [Axios, setDonors]);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="red" />
      <View>
        <Text style={Styles.bloodbankHeading}>Near by Donors</Text>
      </View>
      <View>
        {Donors !== null ? (
          <FlatList
            data={Donors}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  key={item._id}
                  activeOpacity={0.6}
                  style={Styles.banksItems}>
                  <View style={Styles.donateSections}>
                    <Text style={Styles.bankNameText}>Name: {item.name}</Text>
                    <Text style={Styles.bankNameLocation}>Age: {item.age}</Text>
                  </View>
                  <View style={Styles.donateSections}>
                    <Text style={Styles.bankNameLocation}>
                      Country: {item.country}
                    </Text>
                    <Text style={Styles.bankNameLocation}>
                      City: {item.city}
                    </Text>
                  </View>
                  <View style={Styles.donateSections}>
                    <Text style={Styles.bankNameLocation}>
                      Address: {item.address}
                    </Text>
                    <Text style={Styles.bankNameLocation}>
                      Blood Group: {item.bloodtype}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : null}
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
    fontWeight: 'bold',
  },
  bankNameLocation: {
    color: '#fff',
  },
  donateSections: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginVertical: 2,
  },
});

export default NearByDonors;
