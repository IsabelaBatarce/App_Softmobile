import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import ButtonImageCategory from '../components/ButtonImageCategory'

export default class CategoryItensPage extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.listCategory}>
          <ButtonImageCategory nameCategory={'Ferramentas'}/>
          <ButtonImageCategory nameCategory={'Caixas'}/>
          <ButtonImageCategory nameCategory={'Roupas'}/>
          <ButtonImageCategory nameCategory={'Carros'}/>
          <ButtonImageCategory nameCategory={'Alimentos'}/>
          <ButtonImageCategory nameCategory={'Livros'}/>
          <ButtonImageCategory nameCategory={'Eletronicos'}/>
          <ButtonImageCategory nameCategory={'Papelarias'}/>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    height: 900,
    alignItems: 'center'
  },

  listCategory: {
    display: 'flex',
    marginTop: 30,
    flexWrap: 'wrap',
  }

});
