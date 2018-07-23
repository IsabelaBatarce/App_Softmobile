import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import SearchBar from 'react-native-searchbar';

export default class ListClientPage extends React.Component {
 
   static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <View style={styles.header}>
         <TouchableOpacity
         style={{marginRight: 20}}>
         <Icon name='search' color='white' />
         </TouchableOpacity>
         <TouchableOpacity
         style={{marginRight: 20}}>
         <Icon name='person-add' color='white' />
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
      
     

      <ScrollView>
     
      <View style={styles.container}>
      
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
      </View>
      </ScrollView>
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
    flex: 1,
    flexDirection: 'row'
  }
});
