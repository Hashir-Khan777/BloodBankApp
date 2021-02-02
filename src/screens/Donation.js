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
import {useSelector} from 'react-redux';

const Donations = (props) => {
  const DonationReducer = useSelector((state) => state.DonationReducer);
  const {donation} = DonationReducer;

  var donationArray = [];

  if (donation) {
    const donateobj = JSON.parse(donation);
    donationArray = [...donationArray, donateobj];
  }
  console.log(donationArray);

  return (
    <>
      <StatusBar backgroundColor="red" />
      <SafeAreaView style={Styles.donateView}>
        {donation ? (
          <ScrollView>
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
                {donationArray ? (
                  <FlatList
                    data={donationArray}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity key={item._id} activeOpacity={0.6}>
                          <View>
                            <Text>Age: {item.age}</Text>
                            <Text>BloodType: {item.bloodtype}</Text>
                            <Text>Address: {item.address}</Text>
                            <Text>Country: {item.country}</Text>
                            <Text>City: {item.city}</Text>
                            <Text>Postal code: {item.postalcode}</Text>
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                ) : null}
              </View>
            </View>
          </ScrollView>
        ) : (
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
        )}
        {/* <View style={Styles.donateView}>
          {donationArray ? (
            <Text style={Styles.donateTextView}>
              Do you want to donate more
            </Text>
          ) : (
            <Text style={Styles.donateTextView}>
              You donot made any donations
            </Text>
          )}
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => props.navigation.navigate('Donate')}>
            <Text style={Styles.donateButtonText}>Donate</Text>
          </TouchableOpacity>
        </View>
        {donationArray ? (
          <View>
            <FlatList
              data={donationArray}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity key={item._id} activeOpacity={0.6}>
                    <View>
                      <Text>Age: {item.age}</Text>
                      <Text>BloodType: {item.bloodtype}</Text>
                      <Text>Address: {item.address}</Text>
                      <Text>Country: {item.country}</Text>
                      <Text>City: {item.city}</Text>
                      <Text>Postal code: {item.postalcode}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null} */}
      </SafeAreaView>
    </>
  );
};

const Styles = StyleSheet.create({
  donateView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default Donations;
