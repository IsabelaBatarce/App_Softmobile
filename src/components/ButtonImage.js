import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class ButtonImage extends React.Component {
  render(){
    return(
      <TouchableOpacity onPress={this._onPressButton}>
        <Image
          style={styles.button}
          source={{ uri: 'https://picsum.photos/200/300'}}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width: 350,
    height: 120,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 6,
  }
})
