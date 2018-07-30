import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import FormDetails from '../../components/FormDetails';
import {Card, Icon} from 'react-native-elements';

export default class ProductDetailsPage extends Component {
 
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
      <ScrollView>
      <Card containerStyle = {styles.card} >
      <View >
        <Text style={ styles.title }>Detalhes do Produto</Text>
      <View style={styles.container}>
          <View style={styles.container1}>
            <FormDetails style={styles.nome} NomeCampo={'Nome'} ValorCampo={' Macarrao'}/>
            <FormDetails style={styles.marca} NomeCampo={'Marca'} ValorCampo={' Yoda'}/>
          </View>
            <View style={styles.container2}>
              <FormDetails NomeCampo={'Unidade'} ValorCampo={' un'}/>
              <FormDetails NomeCampo={'Desconto'} ValorCampo={' desconto'}/>
            </View>
            <View style={styles.container2}>
              <FormDetails NomeCampo={'Sub-Unidade'} ValorCampo={' unidade'}/>
              <FormDetails NomeCampo={'Preço'} ValorCampo={' 12,00'}/>
            </View>
      </View>
      </View>
       </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 card:{
  marginTop: 45
 },
  title:{
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
    color: '#212121', 
    alignSelf: 'center'
  },
  container: {
    borderRadius: 3,
    elevation: 3,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container1: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    width: 293
  },
    header:{
    flex: 1,
    flexDirection: 'row'
  },
  container2: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    
  }
});

