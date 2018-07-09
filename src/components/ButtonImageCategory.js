import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class ButtonImageCategory extends React.Component {
  render(){
    return(
        <TouchableOpacity onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source={{ uri: 'https://picsum.photos/200/300'}}
          />
            <Text style={ styles.titleCategory }>Categoria</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width: 160,
    height: 160,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  titleCategory:{
    fontSize: 22,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 160,
    height: 60,
    marginTop: -80,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  }


})
