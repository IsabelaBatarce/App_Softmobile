import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Form from '../components/Form';
import Input from '../components/Input';


export default class PrimaryLogin extends React.Component {
  render() {
    return (
      <View>
        <Input
          onChangeText={text => this.onChangeText(text)}
          value={text}
        />
        <Form/>
      </View>
    );
  }
}
