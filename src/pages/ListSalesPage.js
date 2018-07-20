import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';


import InputSearch from '../components/InputSearch';
import ModalList from '../components/ModalList';

export default class ListSalesPage extends React.Component {
  constructor(props){
    super(props);
    this._onPressAdd = this._onPressAdd.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={ navigation.getParam('_OnPressAdd') } style={{marginRight: 20}}><Icon name='more-vert' color='white' /></TouchableOpacity>
      )
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({ _OnPressAdd: this._onPressAdd });
  }

  _onPressAdd(){
    this.refs.ModalList.showAddModal();
  }

  render() {
    const list = [{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' }
                ,{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' }
                ,{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' }
                ,{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' },{ title: 'Trips' }]
    return (
      <View>
        <ModalList style={ styles.modal } ref={'ModalList'}></ModalList>
        <ScrollView>

        <View style={ styles.searchBar }>
          <InputSearch placeholder={'Pesquise uma venda...'}/>
        </View>
        <View style={styles.container}>

        <Text style={ styles.title }>Vendas</Text>

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
      </View>
    );
  }
}

const styles = StyleSheet.create({

  title:{
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: -10
  },
  searchBar:{
    alignItems: 'center'
  },
  modal:{
    flex: 1
  }
});
