/*ValorCampo={' esta em vendas de eletro domesticos com lucro de 60% e nao sei mais esctever o q tem que ter nesse lugar mais tem que ser grande para ter uma boa visao de como ficaria tudi'}*/
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import InputArea from '../components/InputArea';
import FormDetails from '../components/FormDetails';
import { Avatar } from 'react-native-material-ui';
import ListClientPage from './ListClientPage';

export default class ItemCategoryPage extends Component {
    
    static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        
         <TouchableOpacity
         style={{marginRight: 20}}  >
         <Icon name='more-vert' color='white' />
         </TouchableOpacity>
         
      ),
      headerLeft:(
       <TouchableOpacity
         style={{marginLeft: 20}}
         >
         <Icon name='arrow-back' color='white' />
         </TouchableOpacity>
      )
    }
  };

    render() {
    return (
      <ScrollView>
      <Card>
        
      <Text style={ styles.title }>Nome Item</Text>
      <View style={styles.container}>
          <View style={styles.container1}>
            <FormDetails style={styles.nome} NomeCampo={'Nome reduzido'} ValorCampo={'Nome reduzido item'}/>
            <FormDetails style={styles.marca} NomeCampo={'Marca'} ValorCampo={'Nome da marca'}/>
          </View>
            <View style={styles.container2}>
              <FormDetails NomeCampo={'Unidade'} ValorCampo={' Unidade'}/>
              <FormDetails NomeCampo={'Desconto'} ValorCampo={'Desconto'}/>
            </View>
            <View style={styles.container2}>
              <FormDetails NomeCampo={'Sub-unidade'} ValorCampo={'Sub-unidade'}/>
              <FormDetails NomeCampo={'Preço'} ValorCampo={'Preço'}/>
            </View>
           
      </View>


      </Card>
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 
  title:{
    fontSize: 20,
    marginTop: 5,
    alignSelf: 'center',
    marginBottom: 5,
    color: '#2d3436'
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
    
  },
  container2: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    
  }
});
