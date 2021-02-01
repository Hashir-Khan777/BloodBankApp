import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  registerUsers: null,
};

const retrieve = async () => {
  const data = await AsyncStorage.getItem('user');
  return data;
};

retrieve().then((data) =>
  data !== undefined ? INITIAL_STATE.registerUsers.push(data) : null,
);

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

export {RegisterReducer, SigninReducer};
