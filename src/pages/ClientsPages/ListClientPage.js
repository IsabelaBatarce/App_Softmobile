import React, { Component } from 'react';
import {   View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
   } from 'react-native';
import ActionButton from 'react-native-action-button';
import { List, ListItem, Icon, SearchBar } from 'react-native-elements';


export default class ListClientPage extends Component {
  
    

  render() {
    const list = [{ title: 'Trips', subtitle: 'Nome empresa' },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'},{ title: 'Trips', subtitle: 'Nome empresa'},{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa' }
                ,{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'},{ title: 'Trips', subtitle: 'Nome empresa' }
                ,{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'}
                ,{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  },{ title: 'Trips', subtitle: 'Nome empresa'  }]

    return (
      <View style={styles.container}>
 
        
      <ScrollView>

<Text style={ styles.title }>Clientes</Text>



      <List>
        {
          list.map((item, i) => (
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('ClientDetailsPage') }>


            <ListItem

              key={i}
              title={item.title}
              subtitle={item.subtitle}
            />

            </TouchableOpacity>
          ))
        }
      </List>


 </ScrollView>


        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item size={46} buttonColor='#009688' title="Adicionar" onPress={() => this.props.navigation.navigate('AddClientPage')}>
            <Icon name="person-add" color="white" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item size={46}buttonColor='#303f9f' title="Deletar" onPress={() => {
    Alert.alert('Deseja deletar algum cliente?')
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  header:{
    flex: 1,
    flexDirection: 'row'
  }
});
