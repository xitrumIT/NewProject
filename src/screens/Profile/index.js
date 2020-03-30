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
  KeyboardAvoidingView,
} from 'react-native';
//import styles from './styles';
import {connect} from 'react-redux';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };
  }
  componentDidMount() {}
  signOutUser = async () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={require('../../assets/avatar.jpg')}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <View style={styles.info}>
              <Text style={styles.title}>Tên:</Text>
              <Text style={styles.name}>Tien Dat</Text>
              <View style={styles.line}></View>
            </View>

            <View style={styles.info}>
              <Text style={styles.title}>Email:</Text>
              <Text style={styles.name}>123@gmail.com</Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Number:</Text>
              <Text style={styles.name}>0123456789</Text>
              <View style={styles.line}></View>
            </View>

            <TouchableOpacity
              style={styles.btnLogout}
              onPress={() => this.signOutUser()}>
              <Text style={styles.textLogout}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    backgroundColor: '#ffcab4',
    height: 200,
  },
  avatar: {
    width: 220,
    height: 220,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'green',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 40,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    marginVertical: 20,
    marginHorizontal: 15,
    // flex: 1,
    // marginLeft: 10,
    //alignItems: 'center',
    //padding: 30,
  },
  info: {
    flexDirection: 'column',
    margin: 10,
    //marginLeft: 20,
    // marginTop: 10,
    // marginHorizontal: -15,
    //alignItems: 'center',
    // borderWidth: 1,
    height: 60,
  },
  title: {
    fontSize: 22,
    color: '#AEB6BF',
    // fontWeight: '600',
    // borderColor: 'gray',
    // borderRadius: 15,
    // borderWidth: 1,
  },
  name: {
    fontSize: 22,
    color: 'black',
    //fontWeight: '600',
    width: width * 0.9,
    // borderColor: 'gray',
    // borderRadius: 15,
    // borderWidth: 1,
  },
  line: {
    borderWidth: 1,
    borderColor: '#AEB6BF',
    marginVertical: 10,
  },
  btnLogout: {
    //alignSelf: 'stretch',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2f3d4c',
    borderRadius: 10,
    marginTop: 20,
    // marginHorizontal: 10,
  },
  textLogout: {
    color: '#fff',
    fontSize: 20,
  },
});
const mapStateToProps = state => ({
  //token: state.token,
});

const mapDispatchToProps = dispatch => ({
  // saveUserToken: () => dispatch(saveUserToken()),
  // removeUserToken: () => dispatch(removeUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
