import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  

} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import Form from '../components/Form';
import ButtonI from '../components/ButtonI';

export default class AddProductPage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
     
      headerLeft:(
       <TouchableOpacity
         style={{marginLeft: 20}}>
         <Icon name='arrow-back' color='white' />
         </TouchableOpacity>
      )
    }
  }; 

	render() {
	    return (
	    <View style = {styles.container}>
	    
       <ScrollView>
          
          <Card>
            
            <Text style={ styles.title }>Cadastro Produto</Text>
        
        <Form >
            
             <TextInput 
                style={styles.texto}
                placeholder= "Digite a marca"
                inlineImageLeft='search_icon'
                               
                />

            <TextInput 
                style={styles.texto}
                placeholder= "Digite a unidade"
                                
                />

               <TextInput 
                style={styles.texto}
                placeholder= "Digite a sub-unidade"
                               
                />
               <TextInput 
                style={styles.texto}
                placeholder= "Digite a quantidade"
                                
                />
               <TextInput 
                style={styles.texto}
                placeholder= "Digite o preço"
                                
                />            
          
        </Form>
	       
         <View  style = {styles.button} >
        
            <ButtonI onPressButton={ () => this.props.navigation.navigate('ListSalesPage') } />
        
        </View>
         
         </Card>
       
       </ScrollView>
      
    </View>
	    	
        );
	}
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 10,
      

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
            marginTop: 20,
            marginBottom: 25

        },

        title:{
          fontSize: 25,
          textAlign: 'center',
          marginTop: 5,
          marginBottom:5
    
  }

});