import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  registerUsers: null,
  donation: null,
};

const retrieve = async () => {
  const user = await AsyncStorage.getItem('user');
  user !== null ? (INITIAL_STATE.registerUsers = user) : null;

  const donation = await AsyncStorage.getItem('donation');
  donation !== null ? (INITIAL_STATE.donation = donation) : null;
};

retrieve();

const RegisterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return {
        loading: true,
      };
    case 'USER_REGISTER_SUCCESS':
      return {
        loading: false,
        registerUsers: action.payload,
      };
    case 'USER_REGISTER_FAIL':
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const SigninReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_SIGNIN_REQUEST':
      return {
        loading: true,
      };

    case 'USER_SIGNIN_SUCESS':
      return {
        loading: false,
        userInfo: action.payload,
      };

    case 'USER_SIGNIN_FAIL':
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const DonationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_DONATION_REQUEST':
      return {
        loading: true,
      };
    case 'USER_DONATION_SUCCESS':
      return {
        loading: false,
        donation: action.payload,
      };
    case 'USER_DONATION_FAIL':
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {RegisterReducer, SigninReducer, DonationReducer};
