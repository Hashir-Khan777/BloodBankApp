import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {RegisterReducer, SigninReducer} from './reducer/UserReducer';

const Reducers = combineReducers({
  RegisterReducer: RegisterReducer,
  SigninReducer: SigninReducer,
});

const Store = createStore(Reducers, applyMiddleware(thunk));

export default Store;
