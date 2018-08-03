/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modalbox';
import { Icon } from 'react-native-elements';


export default class SearchBar extends Component {
  constructor(props){
    super(props);
  }

  showAddModal = () =>{
    this.refs.searchModal.open();
  }

  render() {
    return (
      <Modal
        style={ styles.modal }
        backdrop
        backdropOpacity={0.3}
        position={"top"}
        ref={'searchModal'}
        animationDuration={0}
      >
        <TextInput style={ styles.input } underlineColorAndroid="white"/>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    backgroundColor: '#e24d4d',
    color: 'white',
    height: 40,
  },
  modal:{
    backgroundColor: '#e24d4d',
    elevation: 2,
    height: 40
  }
});
