import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import ModalList from '../../components/ModalList';

export default class ListSalesPage extends React.Component {
 
  constructor(props){
    super(props);
    this._onPressAdd = this._onPressAdd.bind(this);
  }


  componentWillMount() {
    this.props.navigation.setParams({ _OnPressAdd: this._onPressAdd });
  }

  _onPressAdd(){
    this.refs.ModalList.showAddModal();
  }
  static navigationOptions = ({ navigation }) => {
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

  
  render() {
    
    const list = [{ title: 'Trips', subtitle: 'Nome empresa' },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'},{ title: 'Trips', subtitle: 'Nome empresa'},{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa' }
                ,{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'},{ title: 'Trips', subtitle: 'Nome empresa' }
                ,{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'}
                ,{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  }]
   return (
      <View>
        <ModalList style={ styles.modal } ref={'ModalList'}></ModalList>
       <ScrollView>

        
        <View style={styles.container}>

        <Text style={ styles.title }>Vendas</Text>

        <List>
          {
            list.map((item, i) => (
             <TouchableOpacity onPress={ () => this.props.navigation.navigate('ItemCategoryPage') }>

              <ListItem
                key={i}
                title={item.title}
                subtitle={item.subtitle}
              />
              </TouchableOpacity>
            ))
          }
        </List>
        </View>
        </ScrollView>
      <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item size={46} buttonColor='#009688' title="Editar" onPress={() => {
    Alert.alert('Deseja editar esta venda?')
  }}>
            <Icon name="edit" color="white" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item size={46}buttonColor='#303f9f' title="Deletar" onPress={() => {
    Alert.alert('Deseja realizar a sincronização?')
  }}>
            <Icon name="delete" color="white" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },

  title:{
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    
  },

  
 header:{
  flex:1,
  flexDirection: 'row'
 }
});
