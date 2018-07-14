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
    const list = [{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' }
                ,{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' }
                ,{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' }
                ,{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' }]
    return (
      <ScrollView>
      <View style={ styles.searchBar }>
        <InputSearch placeholder={'Pesquise um cliente...'}/>
      </View>
      <View style={styles.container}>
      <List>
        {
          list.map((item, i) => (
            <TouchableOpacity>
            <ListItem
              key={i}
              title={item.title}
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
    flex: 1
  },
  searchBar:{
    alignItems: 'center'
  }
});
