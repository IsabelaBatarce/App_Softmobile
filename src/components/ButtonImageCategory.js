import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ButtonImageCategory = ({ nameCategory }) => {
    return(

        <TouchableOpacity onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source={{ uri: 'https://picsum.photos/200/300/?random'}}
          />
          <Text style={ styles.titleCategory }>{nameCategory}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button:{
    width: 160,
    height: 160,
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  titleCategory:{
    fontSize: 22,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 160,
    height: 55,
    marginTop: -80,
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  stayElevated: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'white'
  }
})

export default ButtonImageCategory;
