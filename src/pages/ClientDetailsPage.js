/*ValorCampo={' esta em vendas de eletro domesticos com lucro de 60% e nao sei mais esctever o q tem que ter nesse lugar mais tem que ser grande para ter uma boa visao de como ficaria tudi'}*/
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
import InputArea from '../components/InputArea';
import FormDetails from '../components/FormDetails';
import { Avatar } from 'react-native-material-ui';
import ListClientPage from './ListClientPage';
import ModalList from '../components/ModalList';


export default class ClientDetailsPage extends Component {
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
  };*/

  componentWillMount() {
    this.props.navigation.setParams({ _OnPressAdd: this._onPressAdd });
  }

  _onPressAdd(){
    this.refs.ModalList.showAddModal();
  }
    

    render() {
    return (
      <ScrollView>
      <Card>
        
        <Text style={ styles.title }>Detalhes do Cliente</Text>
        <ModalList style={ styles.modal } ref={'ModalList'}></ModalList>
      <View style={styles.container}>
          <View style={styles.container1}>
            <FormDetails style={styles.nome} NomeCampo={'Nome fantásia'} ValorCampo={' Jpaquin'}/>
            <FormDetails style={styles.marca} NomeCampo={'Endereço'} ValorCampo={' Fua Finleto Muller'}/>
            <InputArea NomeCampo={'Observação'}
            ValorCampoInput=
                  {`Lorem ipsum libero consequat sit euismod ornare augue urna nec ad platea a pharetra risus,
                  himenaeos pulvinar morbi ad class accumsan enim est lacinia mauris lacus cras. vel vestibulum
                  phasellus lacus lectus faucibus curabitur eget, eleifend sodales amet per aenean. duis fusce rutrum
                  lacus adipiscing dictumst arcu rutrum ut amet consequat suscipit, a donec mollis eget lectus porttitor
                  aenean morbi quisque. est netus vehicula porttitor aliquam consectetur torquent aenean blandit, id semper
                  at himenaeos sociosqu phasellus augue congue ultricies, mi vel integer ipsum eu eleifend interdum. hac
                  eleifend pharetra lectus facilisis nulla dapibus eget massa placerat phasellus pharetra, senectus sem ad
                  etiam felis cursus accumsan massa varius curae condimentum est, donec dictum etiam proin ante tristique nisl
                  donec turpis aptent.`}
            />
          </View>
            <View style={styles.container2}>
              <FormDetails NomeCampo={'Cidade'} ValorCampo={' Dourados'}/>
              <FormDetails NomeCampo={'Uf'} ValorCampo={' MS'}/>
            </View>
            <View style={styles.container2}>
              <FormDetails NomeCampo={'Bairro'} ValorCampo={' Vila Major Capins Lins'}/>
              <FormDetails NomeCampo={'Complemento'} ValorCampo={' Casa de apartamento fechado'}/>
            </View>
            <View style={styles.container2}>
              <FormDetails NomeCampo={'CPF'} ValorCampo={' 688.535.435-44'}/>
              <FormDetails NomeCampo={'RG'} ValorCampo={' 34.542.645-2'}/>
            </View>
            <View style={styles.container2}>
              <FormDetails NomeCampo={'Telefone'} ValorCampo={' (67) 94323-3465'}/>
              <FormDetails NomeCampo={'Contato'} ValorCampo={' Jpaquin.runs@gmail.com'}/>
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
