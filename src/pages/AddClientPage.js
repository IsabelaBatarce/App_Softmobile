import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import Form from '../components/Form';
export default class AddClientPage extends React.Component {

	render() {
	    return (
	    <View>
	    	<Form >
            
             <TextInput 
                /*style={styles.texto}*/
                placeholder= "012.862.013.123"
                inlineImageLeft='search_icon'
                secureTextEntry
                
    
            />

            <TextInput 
                /*style={styles.texto}*/
                placeholder= "Digite a senha"
                secureTextEntry
                
    
            />

            
          
        </Form>
	    </View>
	    	);
	}
}