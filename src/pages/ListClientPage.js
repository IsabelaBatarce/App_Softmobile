import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

import InputSearch from '../components/InputSearch';

export default class ListClientPage extends React.Component {

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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  searchBar:{
    marginTop: 10,

  },
  title:{
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    
  }
});
