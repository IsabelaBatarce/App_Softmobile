import React from 'react';
import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity } from 'react-native';
import Picker from '../components/Picker';

export default class ClientFilterPage extends React.Component {
  render() {
  	return(

  		<View style = {styles.container}>
  		<Image
        source={require('../images/clientfilter.png')}
        style={styles.image}
      	/>
  		
  		<View  style = {styles.picker}>
  			<Picker/>
  		</View>
  		</View>


  		)

  }

}

const styles = StyleSheet.create({

	container:{

	    backgroundColor: '#f7f7f7',
        marginTop: 100,
        elevation: 2,
        flex: 1,
        marginBottom: 100
        


    },
    picker:{
    	marginTop: 30,

    },

    image:{
        marginTop: 30,
        width: 100, 
    	height: 100 ,
    	alignSelf: 'center',
    	marginBottom: 30
    }
	
	})