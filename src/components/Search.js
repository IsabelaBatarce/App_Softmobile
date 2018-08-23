import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';

export default class Search extends Component {
    
    constructor(props){
      super(props);
    }
      showAddSearch = () =>{
        this.refs.search.open();
      }
       render() {
        
        return (
          <SearchBar
                lightTheme
                clearIcon
                loadingProps 
                showLoading 
                placeholder='Type Here...' 
                containerStyle={{backgroundColor:'transparent'}}
                inputContainerStyle={{backgroundColor:'transparent'}}
                inputStyle={{backgroundColor:'transparent'}}
                ref={'search'}
             />
       
        );
      }
    }




