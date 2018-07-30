import React from 'react';
import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity } from 'react-native';

import Form from '../../components/Form';

import ButtonI from '../../components/ButtonI';



export default class SecondaryLogin extends React.Component {
 
  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle:(<View style = {{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',}}>
              <Image
                source={require('../../images/outline_perm_identity_white_48.png')}
                style={{ width: 100, height:100 }}
              />
              </View>
              )
    }
  }

      
  render() {
    return (
      <View style = {styles.container}>
        
    
              
        <Form >
            
             <TextInput 
                style={styles.texto}
                placeholder= "012.862.013.123"
                
                
    
            />

            <TextInput 
                style={styles.texto}
                placeholder= "Digite a senha"
                secureTextEntry
                
    
            />

            
          
        </Form>
        <View  style = {styles.button} >
            <ButtonI
          
          onPressButton={ () => this.props.navigation.navigate('MenuPage') }
        />        
        </View>
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
        },

        button:{
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: 30
        }

});
