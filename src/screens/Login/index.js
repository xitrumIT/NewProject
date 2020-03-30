import React from 'react';
import firebase from '../../config/fireBase';
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
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import {Value} from 'react-native-reanimated';
import axios from 'axios';
import {connect} from 'react-redux';
import {saveUserToken} from '../../actions/actions';

//import styles from './styles';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
      error: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
  }
  //  .catch(error => this.setState({errorMessage: error.message}));
  handleLogin = async () => {
    const {email, password} = this.state;
    var check_email = RegExp('^[A-Z0-9._-]+@[A-Z0-9.-]+.[A-Z0-9.-]+$');
    if (password.length <= 5) {
      alert('Password > 5');
      return;
    }
    // if (!check_email.test(email)) {
    //   alert('Email have @');
    // } else
    else if (email === '' && password === '') {
      Alert.alert('Enter details to signin!');
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res);
          console.log('User logged-in successfully!');
          this.setState({
            isLoading: false,
            email: '',
            password: '',
          });
          this.props.navigation.navigate('Home');
        })
        .catch(error => this.setState({errorMessage: error.message}));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    const {email, password} = this.state;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.header}> Đăng nhập</Text> */}
        <Image
          source={require('../../assets/avatar2.png')}
          style={styles.Image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          //onChangeText={value => this.setState({username: value})}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
          //onChangeText={this.props.email}
          underlineColorAndroid="transparent"
        />
        <TextInput
          returnKeyType="go"
          secureTextEntry={true}
          keyboardType="default"
          style={styles.textInput}
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          // onChangeText={this.props.password}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => this.handleLogin()}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 7,
            justifyContent: 'space-around',
          }}>
          <Text style={styles.textSignup}>
            Đăng ký nếu bạn chưa có tài khoản!
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate('Home')}
            style={[
              styles.textSignup,
              {
                fontWeight: 'bold',
                color: '#2f3d4c',
              },
            ]}>
            Đăng ký
          </Text>
        </View>
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
    backgroundColor: '#597073',
    // paddingHorizontal: 40,
  },
  wrapper: {
    flex: 1,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    marginBottom: 60,
    color: '#d10000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  textInput: {
    //flex:1,
    height: 60,
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#cccccc',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  btnLogin: {
    alignSelf: 'stretch',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2f3d4c',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textLogin: {
    color: '#fff',
    fontSize: 20,
  },
  textSignup: {
    color: '#cccccc',
    textAlign: 'center',
  },
  Image: {
    //marginTop: 10,
    marginBottom: 20,
    width: width * 0.3,
    height: width * 0.4,
    //margin: width * 0.8,
  },
});
const mapStateToProps = state => ({
  //token: state.token,
});

const mapDispatchToProps = dispatch => ({
  // saveUserToken: () => dispatch(saveUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
