import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonImage = ({ onPressButton, imgBtnMenu }) => {
    return(
        <TouchableOpacity onPress={ onPressButton }>
          <Image
            style={styles.button}
            source={ imgBtnMenu }
          />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button:{
    width: 350,
    height: 120,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 6
  },


})

export default ButtonImage;
