import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const FormDetails = ({ NomeCampo, ValorCampo }) => {
  return(
    <View style={styles.container}>
      <Text style={ styles.label }>{ NomeCampo }</Text>
      <Text style={ styles.input }>{ ValorCampo }</Text>
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
    fontSize: 16,
    marginTop: 1,
    marginBottom: 1,
    marginRight: 10,
    borderRadius: 2,
    borderColor: '#a5a5a5',
    borderWidth: 1,
    elevation: 1,
    backgroundColor: '#fcfcfc',
    height: 40,
    color: '#2d3436'
  }
});
export default FormDetails;
