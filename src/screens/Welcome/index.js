import React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  Alert,
  Modal,
  BackHandler,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Firebase from '../../config/fireBase';

//commit Home +
export default class WelcomeScreen extends React.Component {
  componentWillUnmount() {}
  componentDidMount() {
    // Kiểm tra xem đã login chưa
    // Firebase.auth().onAuthStateChanged(user => {
    //   this.props.navigation.navigate(user ? 'Home' : 'Login');
    // });
  }

  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          resizeMode={'cover'} // or cover
          style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
          source={require('../../assets/c7.jpg')}>
          <View>
            <Text
              style={{
                marginTop: width * 0.2,
                // marginLeft: 45,
                // alignItems: 'center',
                // justifyContent: 'center',
                color: '#eb8c00',
                fontSize: 24,
                textAlign: 'center',
              }}>
              Vui lòng đăng nhập để sử dụng dịch vụ
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/stb.png')}
              style={styles.Image}
              resizeMode="cover"></Image>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={[
                styles.Button,
                {
                  borderColor: 'orange',
                  borderWidth: 1,
                  borderRadius: 30,
                  marginTop: 15,
                },
              ]}>
              <Text style={{color: 'orange'}}>Đăng nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={[
                styles.Button,
                {
                  borderColor: 'orange',
                  borderWidth: 1,
                  borderRadius: 30,
                  marginTop: 15,
                },
              ]}>
              <Text style={{color: 'orange'}}>Đăng ký</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/google.png')}
                  style={{
                    height: 40,
                    width: 40,
                    marginTop: 20,
                    // marginRight: 10,
                  }}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/facebook.png')}
                  style={{
                    height: 40,
                    width: 40,
                    marginTop: 20,
                    marginLeft: 20,
                  }}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //flexDirection:'row',

    // justifyContent: 'center',
  },
  Header: {
    marginTop: 20,
    position: 'absolute',
  },
  Tabbar: {
    flex: 1,
    margin: width * 0.3,
    paddingHorizontal: 30,
  },
  Image: {
    height: width * 0.5,
    width: width * 0.5,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginVertical: 60,
    // marginHorizontal: 80
    // marginStart: 85,
    // marginTop: 15,
  },
  TitleTab: {
    color: 'grey',
    //backgroundColor:'red',
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    height: width * 0.11,
    width: width * 0.45,
    // borderRadius: 10,
    //marginLeft: 30,
  },
});
