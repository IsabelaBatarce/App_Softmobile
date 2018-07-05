import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';
import PrimaryLoginPage from './src/pages/PrimaryLoginPage';
import { Font } from 'expo';

export default class Font extends Component{
   async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
}

}

