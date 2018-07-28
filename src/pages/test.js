import React, { Component } from 'react';
import {   View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';
import { List, ListItem, Icon } from 'react-native-elements';


export default class test extends Component {
  
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
      <View style={styles.container}>
        {/* Rest of the app comes ABOVE the action button component !*/}
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
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
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
