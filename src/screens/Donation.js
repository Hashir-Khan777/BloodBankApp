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
} from 'react-native';

const Donations = (props) => {
  return (
    <SafeAreaView style={Styles.donateView}>
      <StatusBar backgroundColor="red" />
      <View style={Styles.donateView}>
        <Text style={Styles.donateTextView}>You donot made any donations</Text>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => props.navigation.navigate('Donate')}>
          <Text style={Styles.donateButtonText}>Donate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
});

export default Donations;
