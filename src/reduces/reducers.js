import {combineReducers} from 'redux';
import * as actionTypes from '../actions/actionTypes';

const rootReducer = (
  state = {
    token: {},
    isLoading: true,
    error: null,
    password: '',
  },
  action,
) => {
  switch (action.type) {
    case 'GET_TOKEN':
      return {...state, token: action.token};
    case 'SAVE_TOKEN':
      return {...state, token: action.token};
    case 'REMOVE_TOKEN':
      return {...state, token: action.token};
    case 'LOADING':
      return {...state, loading: action.isLoading};
    case 'ERROR':
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default combineReducers({
  token: rootReducer,
});
