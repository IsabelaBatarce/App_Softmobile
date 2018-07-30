import React, { Component } from 'react';
import {   View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


export default class test extends Component {
  

constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
   
    return (
<View>
<FormLabel>Name</FormLabel>
<FormInput placeholder= "Nome fantasma"/>
<FormValidationMessage>Error message</FormValidationMessage>
    </View>
    );
  }

}

