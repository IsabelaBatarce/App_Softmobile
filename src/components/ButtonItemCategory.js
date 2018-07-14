import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonItemCategory = ({ nameCategory }) => {
    return(

        <TouchableOpacity style={ styles.button } onPress={this._onPressButton}>
          <Text style={ styles.nameCategoryStyle }>{nameCategory}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button:{
    width: 180,
    height: 80,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#dd2c00',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },

  nameCategoryStyle:{
    color: 'white',
    fontSize: 20
  }
})

export default ButtonItemCategory;
