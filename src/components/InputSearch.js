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
    backgroundColor: '#f7f7f7',
    height: 50,
    elevation: 3,
    borderRadius: 5
  },

  inputSearch:{
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20,
    fontSize: 16
  }
});

export default InputSearch;
