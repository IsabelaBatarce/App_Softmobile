import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const ButtonImage = ({ onPressButton, imgBtnMenu }) => {
    return(
        
      <TouchableOpacity onPress={ onPressButton }>
           < View styles={styles.background} > 
            <Image
              style={styles.button}
              source={ imgBtnMenu }
            />
          </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button:{
    height: 130,
    margin: 5 
  },


})

export default ButtonImage;
