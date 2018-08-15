import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import ButtonItemCategory from '../components/ButtonItemCategory';
import InputSearch from '../components/InputSearch';

export default class CategoryItensPage extends React.Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.listCategory}>

          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Ferramentas'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Caixas'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Roupas'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Carros'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Alimentos'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Livros'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Eletronicos'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Papelarias'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Ferramentas'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Caixas'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Roupas'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Carros'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Alimentos'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Livros'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Eletronicos'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Papelarias'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Ferramentas'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Caixas'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Roupas'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Carros'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Alimentos'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Livros'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Eletronicos'}/>
          <ButtonItemCategory _onPressButton={ () => this.props.navigation.navigate('ProductDetailsPage') } nameCategory={'Papelarias'}/>

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
