import React from 'react';
import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity } from 'react-native';
import Picker from '../components/Picker';
import { Card } from 'react-native-elements'

export default class ClientFilterPage extends React.Component {
  render() {
  	return(
      <Card containerStyle = {styles.container} >
  		
  		<Image
        source={require('../images/clientfilter.png')}
        style={styles.image}
      	/>
  		
  		<View  style = {styles.picker}>
  			<Picker/>
  		</View>
      </Card>

  		)

  }

}

const styles = StyleSheet.create({

	container:{

	    backgroundColor: '#f7f7f7',
        marginTop: 75,
        elevation: 2,
        flex: 1,
        marginBottom: 80
        


    },
    picker:{
    	marginTop: 45,

    },

    image:{
        marginTop: 40,
        width: 100, 
    	height: 100 ,
    	alignSelf: 'center',
    	marginBottom: 30
    }
	
	})