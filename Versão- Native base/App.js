import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';
import PrimaryLoginPage from './src/pages/PrimaryLoginPage';
import { Font } from 'expo';





export default createStackNavigator({


  'PrimaryLogin':{
    screen: PrimaryLoginPage
  }


},{
  navigationOptions:{
    title: "SoftMobile",
    headerTintColor: "#ecf0f1",
    headerStyle:{
      backgroundColor: "#8e44ad",
     
    },
    headerTitleStyle:{
      color: "#ecf0f1",
      fontSize: 25,
      textAlign: 'center',

    }
  }

})
