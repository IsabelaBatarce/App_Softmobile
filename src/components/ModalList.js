/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modalbox';
import { List, ListItem } from 'react-native-elements'

import ListSalesPage from '../pages/SalesPages/ListSalesPage';


export default class ModalList extends Component {
constructor(props){
  super(props);
}
  showAddModal = () =>{
    this.refs.modal.open();
  }

  render() {

    const list = [
     
      {
        item: 'Excluir',
      },
      {
        item: 'Editar',
      },
    ]
    return (
      <Modal
        style={ styles.modal }
        backdrop={ true }
        position={"top"}
        ref={'modal'}
      >
      <List style={{marginTop: 0}}>
        {
          list.map((l, i) => (
            <ListItem
              title={l.item}
            />
          ))
        }
      </List>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    borderRadius: 3,
    elevation: 3,
    height: 170
  },
});
