
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';


import ModalList from '../components/ModalList';

export default class ListSyncSalesPage extends React.Component {
  constructor(props){
    super(props);
    this._onPressAdd = this._onPressAdd.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View style={styles.header}>
          <TouchableOpacity 
          onPress={ navigation.getParam('_OnPressAdd') } 
          style={{marginRight: 20}}>
          <Icon name='search' color='white' />
          </TouchableOpacity>
          
          <TouchableOpacity
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

  componentWillMount() {
    this.props.navigation.setParams({ _OnPressAdd: this._onPressAdd });
  }

  _onPressAdd(){
    this.refs.ModalList.showAddModal();
  }

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

        <Text style={ styles.title }>Vendas Sincronizadas</Text>

        <List>
          {
            list.map((item, i) => (
              <TouchableOpacity>
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
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    
  },
  header:{
    flex: 1,
    flexDirection: 'row'
  },
  
  modal:{
    flex: 1
  }
});
