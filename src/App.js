import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';
import AppContainer from './src/navigation/AppContainer';

//Redux
import allReducers from './src/reduces/reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {PersistGate} from 'redux-persist/es/integration/react';
import {
  REHYDRATE,
  PURGE,
  persistCombineReducers,
  persistStore,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //sẽ persist
  // whitelist: [
  //   'accountReducer'
  // ],
  //ko persist
  blacklist: [
    // 'late'
  ],
};
// let reducer = persistCombineReducers(config, allReducers)
const persistedReducer = persistReducer(persistConfig, allReducers);

let store = createStore(persistedReducer, compose(applyMiddleware(ReduxThunk)));
let persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (
      // <MyProvider store={store}>
      //   <RootStack />
      // </MyProvider>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
