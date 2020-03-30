import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {getUserToken} from '../actions';
import * as firebase from '../config/fireBase';

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Auth' : 'App');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading....</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
