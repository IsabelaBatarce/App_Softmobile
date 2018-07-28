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
import ModalList from '../components/ModalList';

export default class ItemCategoryPage extends Component {
    
    constructor(props){
    super(props);
    this._onPressAdd = this._onPressAdd.bind(this);
  }

  /*static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View style={styles.header}>
          <TouchableOpacity 
           style={{marginRight: 20}}>
          <Icon name='search' color='white' />
          </TouchableOpacity>
          
          <TouchableOpacity
           onPress={ navigation.getParam('_OnPressAdd') } 
           style={{marginRight: 20}}>
           <Icon name='more-vert' color='white' />
          </TouchableOpacity>
        </View>
      ),
      headerLeft:(
       <TouchableOpacity
         style={{marginLeft: 20}}>
         <Icon name='arrow-back' color='white' />
         </TouchableOpacity>
      )
    }
  };
*/
  componentWillMount() {
    this.props.navigation.setParams({ _OnPressAdd: this._onPressAdd });
  }

  _onPressAdd(){
    this.refs.ModalList.showAddModal();
  }
    

    render() {
    return (
      <ScrollView>
       <ModalList style={ styles.modal } ref={'ModalList'}></ModalList>
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
