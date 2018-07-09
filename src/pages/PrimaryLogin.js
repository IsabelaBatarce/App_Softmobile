import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Form from '../components/Form';
import Picker from '../components/Picker';
import ButtonI from '../components/ButtonI';



export default class PrimaryLogin extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      	<Picker />
              
        <Form >
    
            <TextInput 
                style={styles.texto}
                placeholder= "Digite a senha"
                secureTextEntry
                
    
            />
          
        </Form>

        <ButtonI style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />

      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        padding: 10,
        marginTop: 40

        },
        texto:{
        fontSize: 16,
        paddingTop: 13,
        paddingBottom: 18,
        paddingLeft:11,
        paddingVertical: 5,
        }

});
