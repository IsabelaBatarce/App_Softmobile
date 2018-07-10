import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonI = ({ onPressButton }) => {
    return(
        <TouchableOpacity onPress={ onPressButton } 
        style={styles.button}>
        
        <Text style = {styles.texto}> SALVAR </Text>  

        </TouchableOpacity>
    )
}




const styles = StyleSheet.create ({
 
 button: {
 	width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e24d4d',
    padding: 10,
    elevation: 2
    
    
  },
  texto:{
  	color:'#f5f6fa'
  }

})

export default ButtonI;