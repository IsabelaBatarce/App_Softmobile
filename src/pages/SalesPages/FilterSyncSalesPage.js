import React, { Component } from 'react';
import {   View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { CheckBox,Card } from 'react-native-elements'

export default class FilterSyncSalesPage extends Component {
  constructor(props) {
    
    super(props);
    this.state = {checked: false};
  
  }
 
/* 
   onButtonPressSincronizaadas = () => {
    this.props.navigation.navigate('');
  }
    
  }*/
  render() {
    return (
      <View style={styles.container}>
        <Card>
          
          <Text 
            style={styles.texto}>
            Escolha um item
          </Text>
          
          <CheckBox 
            containerStyle={styles.CheckBox}
            left
            title='Vendas sincronizadas'
            onPress = { 
              () => this.props.navigation.navigate('ListSyncSalesPage') 
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
        
        </Card>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  marginTop: 20,
},
texto:{
  fontSize: 20,
  marginBottom: 20,     
  alignSelf: 'center',
  color:'#263238'
},
CheckBox:{
  backgroundColor: '#f5f5f5'
}
})