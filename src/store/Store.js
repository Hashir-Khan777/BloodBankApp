import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {
  DonationReducer,
  RegisterReducer,
  SigninReducer,
} from './reducer/UserReducer';

const Reducers = combineReducers({
  RegisterReducer: RegisterReducer,
  SigninReducer: SigninReducer,
  DonationReducer: DonationReducer,
});

const Store = createStore(Reducers, applyMiddleware(thunk));

export default Store;
