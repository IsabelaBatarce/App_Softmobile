import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
const InputArea = ({ NomeCampo, ValorCampoInput }) => {
  return(
    <View style={styles.container}>
      <Text style={ styles.label }>{ NomeCampo }</Text>
      <View style={ styles.input }>
      <ScrollView>
        <Text style={ styles.campoValor }>{ ValorCampoInput }</Text>
      </ScrollView>
      </View>
    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label:{
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10
  },
  input:{
    marginTop: 1,
    marginBottom: 1,
    marginRight: 10,
    borderRadius: 2,
    borderColor: '#a5a5a5',
    borderWidth: 1,
    elevation: 1,
    backgroundColor: '#fcfcfc',
    height: 140
  },
  campoValor:{
    fontSize: 20
  }
});
export default InputArea;
