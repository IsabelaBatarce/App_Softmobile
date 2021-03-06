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
import { CheckBox,Card } from 'react-native-elements'
import ListSalesPage from '../pages/SalesPages/ListSalesPage';


export default class ModalList extends Component {
constructor(props){
  super(props);
  this._onPressSync = this._onPressSync.bind(this);

}
  showAddModal = () =>{
    this.refs.modal.open();
  }
 
 _onPressSync(){
    this.props.navigation.navigate('ListSyncErrorSalesPage')
  }

  render() {
    return (
      <Modal
        style={ styles.modal }
        backdrop={ true }
        backButtonClose={ true }
        position={"center"}
        ref={'modal'}
      >
       <View>
       <Text 
            style={styles.texto}>
            Escolha um item
          </Text>
          
          <CheckBox 
            containerStyle={styles.CheckBox}
            left
            title='Vendas sincronizadas'
            onPress = { 
              this._onPressSync 
            } 
          />
          <CheckBox 
            containerStyle={styles.CheckBox}
            left
            title='Vendas não sincronizadas'
            onPress = { 
              () => this.props.navigation.navigate('ListDidntSyncSalesPage') 
            } 
          />
          <CheckBox
            left
            title='Vendas com erro de sincronização'
            onPress = { 
              () => this.props.navigation.navigate('ListSyncErrorSalesPage') 
            } 
          />
        
      
      </View> 
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
