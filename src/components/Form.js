import React from 'react';
import { StyleSheet, View } from 'react-native';

const Form = props => {

  const { children} = props;

    return(
      
      <View style={styles.senha}  > 

        { children }

      </View>
    
    )
};
const styles = StyleSheet.create({
senha: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 4,
        backgroundColor: 'transparent',
        paddingVertical:5
        
         }
})

export default Form;