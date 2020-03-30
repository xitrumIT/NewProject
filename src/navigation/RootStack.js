import * as React from 'react';
import {
  Button,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {createBottomTabNavigator} from 'react-navigation-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import WelcomeScreen from '../screens/Welcome';
import SignUpScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';
import LoadingScreen from '../screens/Loading';

const {width, height} = Dimensions.get('window');

const platform = Platform.OS;
const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Welcome: WelcomeScreen,
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      //https://reactnavigation.org/docs/en/stack-navigator.html
      // headerBackground: (
      //   <Image
      //     style={{
      //       width: '100%',
      //       height: platform === 'ios' ? (isIphoneX() ? 88 : 64) : 54,
      //     }}
      //     resizeMode='stretch'
      //     source={require('../src/assets/header.png')}
      //   />
      // ),
      headerTitleAlign: 'center',
      headerTintColor: 'orange',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: Platform.OS == 'android' ? 26 : 24,
        fontFamily: 'SVN-Newton.ttf',
      },
    },
  },
);
const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      // chặn back trên title
      headerLeft: null,
      headerTintColor: 'orange',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: Platform.OS == 'android' ? 26 : 24,
        fontFamily: 'SVN-Newton',
      },
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
