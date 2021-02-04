import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {SigninUsers} from '../store/action/UserAction';
import {useDispatch, useSelector} from 'react-redux';

const Signin = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fieldError, setFieldError] = useState();

  const dispatch = useDispatch();

  const redirect = 'Home';

  const RegisterReducer = useSelector((state) => state.RegisterReducer);
  const {loading, error} = RegisterReducer;

  const signin = () => {
    dispatch(SigninUsers(email, password));
    if (error) {
      setFieldError(error);
      setTimeout(setFieldError, 3000);
    } else {
      props.navigation.navigate('Home');
    }
  };

  useEffect(async () => {
    const data = await AsyncStorage.getItem('user');
    if (data !== null) {
      props.navigation.navigate(redirect);
    }
  }, [AsyncStorage, redirect, props.navigation]);

  return (
    <>
      <StatusBar backgroundColor="red" />
      {useDeviceOrientation().portrait ? (
        <SafeAreaView style={Styles.container}>
          {loading ? <Text style={{color: '#fff'}}>loading....</Text> : null}
          <View>
            <Text style={Styles.signinHeading}>SignIn in Blood Bank</Text>
            <View>
              <TextInput
                placeholder="Email Address"
                keyboardType="email-address"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                style={Styles.signInTextinput}
                onChangeText={(e) => setEmail(e)}
              />
              <TextInput
                placeholder="Password"
                keyboardType="ascii-capable"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                secureTextEntry={true}
                style={Styles.signInTextinput}
                onChangeText={(e) => setPassword(e)}
              />
              {fieldError ? (
                <Text style={Styles.ErrorStyle}>{fieldError}</Text>
              ) : null}
              <TouchableOpacity activeOpacity={0.6} onPress={signin}>
                <Text style={Styles.signInButton}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.newHereContainer}>
              <Text style={Styles.newHereText}>New to Blood Bank?</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => props.navigation.navigate('Register')}>
                <Text style={Styles.newHereButton}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <ScrollView>
          <SafeAreaView style={Styles.container}>
            {loading ? <Text style={{color: '#fff'}}>loading....</Text> : null}
            <View>
              <Text style={Styles.signinHeading}>SignIn in Blood Bank</Text>
              <Text>{fieldError}</Text>
              <View>
                <TextInput
                  placeholder="Email Address"
                  keyboardType="email-address"
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  style={Styles.signInTextinput}
                  onChangeText={(e) => setEmail(e)}
                />
                <TextInput
                  placeholder="Password"
                  keyboardType="ascii-capable"
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  secureTextEntry={true}
                  style={Styles.signInTextinput}
                  onChangeText={(e) => setPassword(e)}
                />
                {fieldError ? (
                  <Text style={Styles.ErrorStyle}>{fieldError}</Text>
                ) : null}
                <TouchableOpacity activeOpacity={0.6} onPress={signin}>
                  <Text style={Styles.signInButton}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.newHereContainer}>
                <Text style={Styles.newHereText}>New to Blood Bank?</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => props.navigation.navigate('Register')}>
                  <Text style={Styles.newHereButton}>Register</Text>
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
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  signinHeading: {
    fontSize: 20,
    color: '#fff',
    marginTop: 30,
  },
  signInTextinput: {
    color: '#fff',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 0,
    marginVertical: 15,
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
  newHereContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 50,
  },
  newHereText: {
    color: '#fff',
    marginRight: 5,
  },
  newHereButton: {
    color: 'red',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  ErrorStyle: {
    color: '#fff',
    marginBottom: 10,
  },
});

export default Signin;
