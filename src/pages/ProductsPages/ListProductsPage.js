
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






export default class ListItemProductPage extends React.Component {
  

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View style={styles.header}>
          <TouchableOpacity 
           style={{marginRight: 20}}>
          <Icon name='search' color='white' />
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
    
    const list = [{ title: '1 - Água com gás', subtitle: 'R$50' },{ title: '2 - Água com gás', subtitle: 'R$50'  },{ title: '3 - Água com gás', subtitle: 'R$50'},{ title: '4 - Água com gás', subtitle: 'R$50'},{ title: '5 - Água com gás', subtitle: 'R$50'  },{ title: '6 - Água com gás', subtitle: 'R$50' }
                ,{ title: '7  - Água com gás', subtitle: ' R$50'  },{ title: '8 - Água com gás', subtitle: 'R$50'  },{ title: '9 - Água com gás', subtitle: 'R$50'  },{ title: '10 - Água com gás', subtitle: 'R$50'  },{ title: '11 - Água com gás', subtitle: 'R$50'  },{ title: '12 - Água com gás', subtitle: 'R$50'},{ title: '13 - Água com gás', subtitle: 'R$50' }
                ,{ title: '14 - Água com gás', subtitle: 'R$50'  },{ title: '15 - Água com gás', subtitle: 'R$50'  },{ title: '16 - Água com gás', subtitle: 'R$50'  },{ title: '17 - Água com gás', subtitle: 'R$50'  },{ title: '18 - Água com gás', subtitle: 'R$50'  },{ title: '19 - Água com gás', subtitle: 'R$50'  },{ title: '20 - Água com gás', subtitle: 'R$50'}
                ,{ title: '21 - Água com gás', subtitle: 'R$50'  },{ title: '22 - Água com gás', subtitle: 'R$50'  },{ title: '23 - Água com gás', subtitle: 'R$50'  },{ title: '24 - Água com gás', subtitle: 'R$50'  },{ title: '25 - Água com gás', subtitle: 'R$50'  },{ title: '26 - Água com gás', subtitle: 'R$50'  },{ title: '27 - Água com gás', subtitle: 'R$50'  }]
   return (
      <View>
        <ScrollView>

        
        <View style={styles.container}>

        <Text style={ styles.title }>Produtos</Text>

        <List>
          {
            list.map((item, i) => (
              <TouchableOpacity
              onPress={ () => this.props.navigation.navigate('ProductDetailsPage') }
              >
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
