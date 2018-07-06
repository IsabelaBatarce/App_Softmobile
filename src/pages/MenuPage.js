import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import ButtonImage from '../components/ButtonImage'

export default class MenuPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonImage/>
        <ButtonImage/>
        <ButtonImage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }

});
