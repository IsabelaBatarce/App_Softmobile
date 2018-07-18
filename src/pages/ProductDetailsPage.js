import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import FormDetails from '../components/FormDetails';

export default class ProductDetailsPage extends Component {
  render() {
    return (
      <ScrollView>
      <View style={ styles.all }>
        <Text style={ styles.title }>Detalhes do Produto</Text>
      <View style={styles.container}>
          <View style={styles.container1}>
            <FormDetails style={styles.nome} NomeCampo={'Nome reduzido'} ValorCampo={' Macarrao'}/>
            <FormDetails style={styles.marca} NomeCampo={'Marca'} ValorCampo={' Yoda'}/>
          </View>
            <View style={styles.container2}>
              <FormDetails NomeCampo={'Unidade'} ValorCampo={' un'}/>
              <FormDetails NomeCampo={'Desconto'} ValorCampo={' desconto'}/>
            </View>
            <View style={styles.container3}>
              <FormDetails NomeCampo={'Sub-Unidade'} ValorCampo={' unidade'}/>
              <FormDetails NomeCampo={'Preço'} ValorCampo={' 12,00'}/>
            </View>
      </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  all:{
    alignItems: 'center'
  },
  title:{
    fontSize: 30,
    marginTop: 5,
    marginBottom: 5
  },
  container: {
    borderRadius: 3,
    width: 380,
    elevation: 3,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container1: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    width: 350
  },
  container2: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    width: 340
  },
  container3: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    width: 340
  },
});
