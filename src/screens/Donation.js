import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Donations = (props) => {
  const [donationArray, setDonationArray] = useState(null);

  useEffect(async () => {
    const data = await AsyncStorage.getItem('donation');
    data !== null && setDonationArray([JSON.parse(data)]);
    return () => {
      // 
    }
  }, [AsyncStorage, setDonationArray]);

  return (
    <>
      <StatusBar backgroundColor="red" />
      {donationArray ? (
        <SafeAreaView style={Styles.donateView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View style={Styles.donateLivstView}>
                <View>
                  <Text>Do you want to donate more</Text>
                </View>
                <View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => props.navigation.navigate('Donate')}>
                    <Text style={Styles.donateButtonText}>Donate</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                {donationArray !== null ? (
                  <FlatList
                    data={donationArray}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity
                          key={item._id}
                          activeOpacity={0.6}
                          style={Styles.banksItems}>
                          <View>
                            <View style={Styles.donateSections}>
                              <Text style={Styles.bankNameText}>
                                Age: {item.age}
                              </Text>
                              <Text style={Styles.bankNameText}>
                                BloodType: {item.bloodtype}
                              </Text>
                            </View>
                            <View style={Styles.donateSections}>
                              <Text style={Styles.bankNameText}>
                                Country: {item.country}
                              </Text>
                              <Text style={Styles.bankNameText}>
                                City: {item.city}
                              </Text>
                            </View>
                            <View style={Styles.donateSections}>
                              <Text style={Styles.bankNameText}>
                                Address: {item.address}
                              </Text>
                              <Text style={Styles.bankNameText}>
                                Postal code: {item.postalcode}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                ) : null}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={Styles.donateView}>
          <View style={Styles.donateView}>
            <Text style={Styles.donateTextView}>
              You donot made any donations
            </Text>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => props.navigation.navigate('Donate')}>
              <Text style={Styles.donateButtonText}>Donate</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  donateView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  donateButtonText: {
    color: 'red',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  donateTextView: {
    fontSize: 18,
  },
  donateLivstView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  donateSections: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginVertical: 2,
  },
});

export default Donations;
