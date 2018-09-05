import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import ButtonImage from '../components/ButtonImage';

export default class MenuPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
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
          <ButtonImage
            imgBtnMenu={require('../images/img_btn_sync.png')}
            onPressButton={ () => this.props.navigation.navigate('ListSalesPage') }
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15
  }

});
