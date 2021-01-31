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
} from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';

const Register = (props) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fieldError, setFieldError] = useState();

  const registered = () => {
    if (!name || !number || !email || !password) {
      if (!name) {
        setFieldError('Name is required');
      } else if (!number) {
        setFieldError('Number is required');
      } else if (!email) {
        setFieldError('Email is required');
      } else if (!password) {
        setFieldError('Password is required');
      } else {
        setFieldError('Name, Number, Email and Password is required');
      }
      setTimeout(() => setFieldError(), 4000);
    } else {
      fetch('http://192.168.10.113:4000/api/users/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          number: number,
          email: email,
          password: password,
        }),
      });
      props.navigation.navigate('Home');
    }
  };

  return (
    <>
      <StatusBar backgroundColor="red" />
      {useDeviceOrientation().portrait ? (
        <SafeAreaView style={Styles.container}>
          <View>
            <Text style={Styles.signinHeading}>Register in Blood Bank</Text>
            <View>
              <TextInput
                placeholder="Full name"
                keyboardType="default"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                style={Styles.signInTextinput}
                value={name}
                onChangeText={(e) => setName(e)}
              />
              <TextInput
                placeholder="Mobile number"
                keyboardType="number-pad"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                style={Styles.signInTextinput}
                value={number}
                onChangeText={(e) => setNumber(e)}
              />
              <TextInput
                placeholder="Email Address"
                keyboardType="email-address"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                style={Styles.signInTextinput}
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
              <TextInput
                placeholder="Password"
                keyboardType="ascii-capable"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                secureTextEntry={true}
                style={Styles.signInTextinput}
                value={password}
                onChangeText={(e) => setPassword(e)}
              />
              <Text style={fieldError && Styles.ErrorStyle}>{fieldError}</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={registered}>
                <Text style={Styles.signInButton}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.newHereContainer}>
              <Text style={Styles.newHereText}>Already have an account?</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text
                  style={Styles.newHereButton}
                  onPress={() => props.navigation.navigate('SignIn')}>
                  SignIn
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <ScrollView>
          <SafeAreaView style={Styles.container}>
            <View>
              <Text style={Styles.signinHeading}>Register in Blood Bank</Text>
              <View>
                <TextInput
                  placeholder="Full name"
                  keyboardType="default"
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  style={Styles.signInTextinput}
                  value={name}
                  onChangeText={(e) => setName(e)}
                />
                <TextInput
                  placeholder="Mobile number"
                  keyboardType="number-pad"
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  style={Styles.signInTextinput}
                  value={number}
                  onChangeText={(e) => setNumber(e)}
                />
                <TextInput
                  placeholder="Email Address"
                  keyboardType="email-address"
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  style={Styles.signInTextinput}
                  value={email}
                  onChangeText={(e) => setEmail(e)}
                />
                <TextInput
                  placeholder="Password"
                  keyboardType="ascii-capable"
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  secureTextEntry={true}
                  style={Styles.signInTextinput}
                  value={password}
                  onChangeText={(e) => setPassword(e)}
                />
                <Text style={fieldError && Styles.ErrorStyle}>
                  {fieldError}
                </Text>
                <TouchableOpacity activeOpacity={0.6} onPress={registered}>
                  <Text style={Styles.signInButton}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.newHereContainer}>
                <Text style={Styles.newHereText}>Already have an account?</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text
                    style={Styles.newHereButton}
                    onPress={() => props.navigation.navigate('SignIn')}>
                    SignIn
                  </Text>
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
    height: '100%',
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
    marginBottom: 30,
  },
  newHereText: {
    color: '#fff',
  },
  newHereButton: {
    color: 'red',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  ErrorStyle: {
    color: '#fff',
    marginBottom: 10,
  },
});

export default Register;
