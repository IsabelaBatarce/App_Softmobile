import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import ButtonItemCategory from '../components/ButtonItemCategory';
import InputSearch from '../components/InputSearch';

export default class CategoryItensPage extends React.Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <InputSearch
          placeholder={'Pesquise uma categoria...'}
        />
        <View style={styles.listCategory}>
          <ButtonItemCategory nameCategory={'Ferramentas'}/>
          <ButtonItemCategory nameCategory={'Caixas'}/>
          <ButtonItemCategory nameCategory={'Roupas'}/>
          <ButtonItemCategory nameCategory={'Carros'}/>
          <ButtonItemCategory nameCategory={'Alimentos'}/>
          <ButtonItemCategory nameCategory={'Livros'}/>
          <ButtonItemCategory nameCategory={'Eletronicos'}/>
          <ButtonItemCategory nameCategory={'Papelarias'}/>
          <ButtonItemCategory nameCategory={'Ferramentas'}/>
          <ButtonItemCategory nameCategory={'Caixas'}/>
          <ButtonItemCategory nameCategory={'Roupas'}/>
          <ButtonItemCategory nameCategory={'Carros'}/>
          <ButtonItemCategory nameCategory={'Alimentos'}/>
          <ButtonItemCategory nameCategory={'Livros'}/>
          <ButtonItemCategory nameCategory={'Eletronicos'}/>
          <ButtonItemCategory nameCategory={'Papelarias'}/>
          <ButtonItemCategory nameCategory={'Ferramentas'}/>
          <ButtonItemCategory nameCategory={'Caixas'}/>
          <ButtonItemCategory nameCategory={'Roupas'}/>
          <ButtonItemCategory nameCategory={'Carros'}/>
          <ButtonItemCategory nameCategory={'Alimentos'}/>
          <ButtonItemCategory nameCategory={'Livros'}/>
          <ButtonItemCategory nameCategory={'Eletronicos'}/>
          <ButtonItemCategory nameCategory={'Papelarias'}/>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    height: 800,
    alignItems: 'center'
  },

  listCategory: {
    display: 'flex',
    marginTop: 10,
    flexWrap: 'wrap',
  }

});
