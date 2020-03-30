import React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  FlatList,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
//import styles from './styles';
import firebase from '../../config/fireBase';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      uid: '',
      currentUser: '',
    };
  }

  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    this.state = {
      username: firebase.auth().currentUser.username,
      uid: firebase.auth().currentUser.uid,
    };

    return (
      <View style={styles.container}>
        <Text>Hi {this.state.username}!</Text>
        <Button title="Sign Out" onPress={this.handleSignOut} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Profile')}>
          <Text style={{color: 'orange', fontSize: 25, marginTop: 12}}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b1b1b1',
  },
});
