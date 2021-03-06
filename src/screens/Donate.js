import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Picker,
} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {useDispatch, useSelector} from 'react-redux';
import {UsersDonations} from '../store/action/UserAction';

const Donate = (props) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [postalCode, setPostalCode] = useState();
  const [bloodType, setBloodType] = useState();
  const [fieldError, setFieldError] = useState();

  const DonationReducer = useSelector((state) => state.DonationReducer);
  const {loading, error} = DonationReducer;

  const dispatch = useDispatch();

  const Donate = () => {
    if (error) {
      setFieldError(error);
      setTimeout(setFieldError, 3000);
    } else {
      if (!error) {
        dispatch(
          UsersDonations(
            name,
            age,
            country,
            city,
            address,
            postalCode,
            bloodType,
          ),
        );
        props.navigation.navigate('Donations');
      }
    }
  };

  return (
    <>
      <StatusBar backgroundColor="red" />
      {useDeviceOrientation().portrait ? (
        <SafeAreaView style={Styles.container}>
          {loading ? <Text style={{color: '#fff'}}>loading....</Text> : null}
          <View>
            <Text style={Styles.signinHeading}>Donate Blood</Text>
            <View>
              <TextInput
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                placeholder="Name"
                style={Styles.signInTextinput}
                keyboardType="default"
                onChangeText={(e) => setName(e)}
              />
              <TextInput
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                placeholder="Age"
                style={Styles.signInTextinput}
                keyboardType="numeric"
                onChangeText={(e) => setAge(e)}
              />
              <Picker
                mode="dropdown"
                style={Styles.signInTextinput}
                selectedValue={country}
                onValueChange={(e) => setCountry(e)}>
                <Picker.Item value="0" label="Select Country" />
                <Picker.Item value="Pakistan" label="Pakistan" />
                <Picker.Item value="Iran" label="Iran" />
                <Picker.Item value="India" label="India" />
                <Picker.Item value="Afghanistan" label="Afghanistan" />
              </Picker>
              <Picker
                mode="dropdown"
                style={Styles.signInTextinput}
                selectedValue={city}
                onValueChange={(e) => setCity(e)}>
                <Picker.Item value="0" label="Select City" />
                <Picker.Item value="Karachi" label="Karachi" />
                <Picker.Item value="Lahore" label="Lahore" />
                <Picker.Item value="Islamabad" label="Islamabad" />
                <Picker.Item value="Hydrabad" label="Hydrabad" />
              </Picker>
              <TextInput
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                placeholder="Address"
                style={Styles.signInTextinput}
                keyboardType="default"
                onChangeText={(e) => setAddress(e)}
              />
              <TextInput
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                placeholder="Postal Code"
                style={Styles.signInTextinput}
                keyboardType="decimal-pad"
                onChangeText={(e) => setPostalCode(e)}
              />
              <Picker
                mode="dropdown"
                style={Styles.signInTextinput}
                selectedValue={bloodType}
                onValueChange={(e) => setBloodType(e)}>
                <Picker.Item value="0" label="Select Blood Type" />
                <Picker.Item value="A+" label="A+" />
                <Picker.Item value="B+" label="B+" />
                <Picker.Item value="O+" label="O+" />
                <Picker.Item value="AB+" label="AB+" />
                <Picker.Item value="A-" label="A-" />
                <Picker.Item value="B-" label="B-" />
                <Picker.Item value="O-" label="O-" />
                <Picker.Item value="AB-" label="AB-" />
              </Picker>
              {fieldError ? (
                <Text style={Styles.ErrorStyle}>{fieldError}</Text>
              ) : null}
              <TouchableOpacity activeOpacity={0.7} onPress={Donate}>
                <Text style={Styles.signInButton}>Donate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <ScrollView>
          <SafeAreaView style={Styles.container}>
            {loading ? <Text style={{color: '#fff'}}>loading....</Text> : null}
            <View
              style={{
                paddingVertical: 20,
              }}>
              <Text style={Styles.signinHeading}>Donate Blood</Text>
              <View>
                <TextInput
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  placeholder="Age"
                  style={Styles.signInTextinput}
                  keyboardType="numeric"
                  onChangeText={(e) => setAge(e)}
                />
                <Picker
                  mode="dropdown"
                  style={Styles.signInTextinput}
                  selectedValue={country}
                  onValueChange={(e) => setCountry(e)}>
                  <Picker.Item value="0" label="Select Country" />
                  <Picker.Item value="Pakistan" label="Pakistan" />
                  <Picker.Item value="Iran" label="Iran" />
                  <Picker.Item value="India" label="India" />
                  <Picker.Item value="Afghanistan" label="Afghanistan" />
                </Picker>
                <Picker
                  mode="dropdown"
                  style={Styles.signInTextinput}
                  selectedValue={city}
                  onValueChange={(e) => setCity(e)}>
                  <Picker.Item value="0" label="Select City" />
                  <Picker.Item value="Karachi" label="Karachi" />
                  <Picker.Item value="Lahore" label="Lahore" />
                  <Picker.Item value="Islamabad" label="Islamabad" />
                  <Picker.Item value="Hydrabad" label="Hydrabad" />
                </Picker>
                <TextInput
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  placeholder="Address"
                  style={Styles.signInTextinput}
                  keyboardType="default"
                  onChangeText={(e) => setAddress(e)}
                />
                <TextInput
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  placeholder="Postal Code"
                  style={Styles.signInTextinput}
                  keyboardType="decimal-pad"
                  onChangeText={(e) => setPostalCode(e)}
                />
                <Picker
                  mode="dropdown"
                  style={Styles.signInTextinput}
                  selectedValue={bloodType}
                  onValueChange={(e) => setBloodType(e)}>
                  <Picker.Item value="0" label="Select Blood Type" />
                  <Picker.Item value="A+" label="A+" />
                  <Picker.Item value="B+" label="B+" />
                  <Picker.Item value="O+" label="O+" />
                  <Picker.Item value="AB+" label="AB+" />
                  <Picker.Item value="A-" label="A-" />
                  <Picker.Item value="B-" label="B-" />
                  <Picker.Item value="O-" label="O-" />
                  <Picker.Item value="AB-" label="AB-" />
                </Picker>
                {fieldError ? (
                  <Text style={Styles.ErrorStyle}>{fieldError}</Text>
                ) : null}
                <TouchableOpacity activeOpacity={0.7} onPress={Donate}>
                  <Text style={Styles.signInButton}>Donate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 70,
  },
  signinHeading: {
    fontSize: 20,
    color: '#fff',
    marginTop: 0,
  },
  signInTextinput: {
    color: '#fff',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 0,
    marginVertical: 7,
  },
  signInButton: {
    color: 'red',
    backgroundColor: '#fff',
    width: '40%',
    paddingVertical: 5,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ErrorStyle: {
    color: '#fff',
    marginBottom: 10,
  },
});

export default Donate;
