import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

const InputSearch = ({ placeholder, onChanSerach }) => {
    return (
      <View style={ styles.searchBar }>
        <TextInput
          placeholder={ placeholder }
          style={ styles.inputSearch }
          onChangeText={ onChanSerach }
        />
      </View>
    );
}

const styles = StyleSheet.create({
  searchBar:{
    backgroundColor: 'white',
    height: 60,
    elevation: 3.5,
    marginTop: 10,
    width: 390,
    alignItems: 'center',
    borderRadius: 5
  },

  inputSearch:{
    height: 58,
    width: 380,
    fontSize: 20
  }
});

export default InputSearch;
