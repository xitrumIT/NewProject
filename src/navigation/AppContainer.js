import React from 'react';

import {Button, View, Text, BackHandler, Alert} from 'react-native';

import NavigationService from './NavigationService';
import TopLevelNavigator from './RootStack';

export default class AppWithNavigationState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftDrawerOpened: false,
      isRightDrawerOpened: false,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
  }

  render() {
    return (
      <TopLevelNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
