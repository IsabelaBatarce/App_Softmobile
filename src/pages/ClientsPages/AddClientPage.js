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
import Form from '../../components/Form';
import ButtonI from '../../components/ButtonI';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class AddClientPage extends React.Component {
	render() {
	    return (
	    <View style = {styles.container}>

       <ScrollView>

          <Card>

            <Text style={ styles.title }>Cadastro Cliente</Text>
        <View>

            <FormLabel>Nome Fantasma</FormLabel>
             <FormInput
                placeholder= "Digite o nome fantasma"


                />
            <FormLabel>Endereço</FormLabel>
            <FormInput
                placeholder= "Digite o Endereço"

                />
               <FormLabel>Cidade</FormLabel>
               <FormInput
                placeholder= "Digite a cidade"

                />
               <FormLabel>UF</FormLabel>
               <FormInput
                placeholder= "Digite o UF"

                />
               <FormLabel>Bairro</FormLabel>
               <FormInput
                placeholder= "Digite o baairro"

                />
               <FormLabel>Complemento</FormLabel>
               <FormInput
                placeholder= "Digite o complemento"

                />
               <FormLabel>CPF/CNPJ</FormLabel>
               <FormInput
                placeholder= "Digite o CPF/CNPJ"

                />
               <FormLabel>RG</FormLabel>
               <FormInput
                placeholder= "Digite o RG"

                />
               <FormLabel>Telefone</FormLabel>
               <FormInput
                placeholder= "Digite o telefone"

                />
               <FormLabel>Contato</FormLabel>
               <FormInput
                placeholder= "Digite o contato"

                />
             <FormLabel>Observação</FormLabel>
             <FormInput
                placeholder= "Digite a observação"

                />


	       </View>
         <View  style = {styles.button} >

            <ButtonI onPressButton={ () => this.props.navigation.navigate('ListClientPage') } />

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
          marginBottom:5,
          color:'#212121'

  }

});
