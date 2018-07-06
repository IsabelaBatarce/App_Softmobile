import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Input from './Input';

 export default class Form extends React.Component{
     render(){

 return(
                <View style={ styles.formContainer }>
                <View style={ styles.inputContainer }>
                  <Input
                    onChangeText={text => this.onChangeText(text)}
                    value={text}
                  />
                </View>
                <View style={ styles.ButtonContainer }>
                   <Button
                        title="ADD"
                        onPress={ () => this.onPress() }
                    />
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    formContainer:{
        flexDirection: 'row'
    },
    inputContainer:{
        flex: 4
    },
    ButtonContainer:{
        flex: 1
    }
})
