import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import ButtonImage from '../components/ButtonImage';

export default class MenuPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ButtonImage
          imgBtnMenu={require('../images/img_btn_produtos.png')}
          onPressButton={ () => this.props.navigation.navigate('CategoryItensPage') }
        />
        <ButtonImage
          imgBtnMenu={require('../images/img_btn_clientes.png')}
          onPressButton={ () => this.props.navigation.navigate('ListClientPage') }
        />
        <ButtonImage
          imgBtnMenu={require('../images/img_btn_vendas.png')}
          onPressButton={ () => this.props.navigation.navigate('ListSalesPage') }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center'
  }

});
