import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  <ScrollView>
} from 'react-native';

import ListComponent from '../components/ListComponent'

export default class ListProdutsPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const list = [
      {
        name: 'Amy Farha'
      },
      {
        name: 'Chris Jackson'
      }
    ]
    return (
      <ScrollView>
      <View style={styles.container}>
        <ListComponent />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
