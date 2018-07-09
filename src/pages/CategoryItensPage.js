import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import ButtonImageCategory from '../components/ButtonImageCategory'

export default class CategoryItensPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonImageCategory/>
        <ButtonImageCategory/>
        <ButtonImageCategory/>
        <ButtonImageCategory/>
        <ButtonImageCategory/>
        <ButtonImageCategory/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    display: 'flex',
    flexWrap: 'wrap',

  }

});
