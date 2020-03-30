import React from 'react';
import firebase from '../../config/fireBase';
import {connect} from 'react-redux';
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
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';

//import styles from './styles';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      token: '',
      isLoading: false,
    };
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  componentDidMount() {
    // this.handleSignUp();
  }

  handleSignUp = async () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!');
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          res.user.updateProfile({
            username: this.state.username,
          });
          console.log('User registered successfully!');
          this.setState({
            isLoading: false,
            username: '',
            email: '',
            password: '',
          });
          this.props.navigation.navigate('Profile');
        })
        .catch(error => this.setState({errorMessage: error.message}));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#FDF000" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {/* <Text style={styles.header}> Đăng ký</Text> */}
        <Image source={require('../../assets/reg.png')} style={styles.Image} />
        <TextInput
          ref="1"
          style={styles.textInput}
          placeholder="Username"
          onChangeText={val => this.updateInputVal(val, 'username')}
          value={this.state.username}
          underlineColorAndroid="transparent"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('2')}
        />

        <TextInput
          ref="2"
          style={styles.textInput}
          placeholder="Email"
          onChangeText={val => this.updateInputVal(val, 'email')}
          value={this.state.email}
          underlineColorAndroid="transparent"
          keyboardType="email-address"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('3')}
        />
        <TextInput
          ref="3"
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Password"
          onChangeText={val => this.updateInputVal(val, 'password')}
          value={this.state.password}
          underlineColorAndroid="transparent"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('4')}
        />
        <TextInput
          ref="4"
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Confirm Password"
          onChangeText={val => this.updateInputVal(val, 'confirmPassword')}
          value={this.state.confirmPassword}
          underlineColorAndroid="transparent"
          blurOnSubmit={true}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.btnLogin} onPress={this.handleSignUp}>
          <Text style={styles.textLogin}>Đăng ký</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Text style={styles.textSignup}>
            Đăng nhập nếu bạn đã có tài khoản!
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate('Login')}
            style={[
              styles.textSignup,
              {
                fontWeight: 'bold',
                color: '#2f3d4c',
              },
            ]}>
            Đăng nhập
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
    fontFamily: 'SVN-Newton.ttf',
  },
  textSignup: {
    color: '#e5e5e5',
    fontSize: 15,
  },
  Image: {
    //marginTop: 10,
    marginVertical: 20,
    width: width * 0.99,
    height: width * 0.41,
    //margin: width * 0.8,
  },
});
const mapStateToProps = state => ({
  //token: state.token,
});

const mapDispatchToProps = dispatch => ({
  // saveUserToken: () => dispatch(saveUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
