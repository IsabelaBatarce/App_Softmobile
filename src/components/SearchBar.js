import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import SearchBar from 'react-native-searchbar';

export default class SearchContainer extends Component {

constructor(props){
  super(props);
}
  showSearchBar = () =>{
    this.refs.SearchBar.open();
  }

  

  render() {
    return (
      <View>
        <SearchBar
          ref={'SearchBar'}
          
        />
      </View>
    );
  }
}