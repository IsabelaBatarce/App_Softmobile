import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class ButtonI extends React.Component {    

	render() {
	   return (
	     <View style={{width: 100}}>
	       <TouchableOpacity
	         style={styles.button}

	         onPress={this.onPress}
	       >
	         <Text style = {styles.texto}> SALVAR </Text>
	       </TouchableOpacity>
	      </View>
 		)
 	}
}

const styles = StyleSheet.create ({
 
 button: {
  
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e24d4d',
    padding: 10,
    
    
  },
  texto:{
  	color:'#f5f6fa'
  }

})