import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const RegisterUsers = (name, number, email, password) => async (dispatch) => {
  dispatch({
    type: 'USER_REGISTER_REQUEST',
    payload: {name, number, email, password},
  });
  try {
    const {data} = await axios.post(
      'http://192.168.10.113:4000/api/users/register',
      {
        name: name,
        number: number,
        email: email,
        password: password,
      },
    );
    dispatch({type: 'USER_REGISTER_SUCCESS', payload: data});
    await AsyncStorage.setItem('user', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const SigninUsers = (email, password) => async (dispatch) => {
  dispatch({
    type: 'USER_SIGNIN_REQUEST',
    payload: {email, password},
  });
  try {
    const {data} = await Axios.post(
      'http://192.168.10.113:4000/api/users/signin',
      {
        email: email,
        password: password,
      },
    );
    dispatch({type: 'USER_SIGNIN_SUCESS', payload: data});
    await AsyncStorage.setItem('user', JSON.stringify(data), async () => {
      await AsyncStorage.mergeItem('user', JSON.stringify(data));
    });
  } catch (err) {
    dispatch({
      type: 'USER_SIGNIN_FAIL',
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const UsersDonations = (
  age,
  country,
  city,
  address,
  postalcode,
  bloodtype,
) => async (dispatch) => {
  dispatch({
    type: 'USER_DONATION_REQUEST',
    payload: {age, country, city, address, postalcode, bloodtype},
  });
  try {
    const {data} = await axios.post(
      'http://192.168.10.113:4000/api/users/donate',
      {
        age: age,
        country: country,
        city: city,
        address: address,
        postalcode: postalcode,
        bloodtype: bloodtype,
      },
    );
    dispatch({type: 'USER_DONATION_SUCCESS', payload: data});
    await AsyncStorage.setItem('donation', JSON.stringify(data), async () => {
      await AsyncStorage.mergeItem('donation', JSON.stringify(data));
    });
  } catch (err) {
    dispatch({
      type: 'USER_DONATION_FAIL',
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export {RegisterUsers, SigninUsers, UsersDonations};
