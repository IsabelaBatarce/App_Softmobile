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


export default class ListSalesPage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View style={styles.header}>
          <TouchableOpacity

          style={{marginRight: 20}}>
          <Icon name='search' color='white' />
          </TouchableOpacity>


        </View>
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
          <ActionButton.Item size={46}buttonColor='#303f9f' title="Sync" onPress={() => {
    Alert.alert('Deseja realizar a sincronização?')
  }}>
            <Icon name="sync" color="white" style={styles.actionButtonIcon} />
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


  modal:{
    flex: 1
  }
});
