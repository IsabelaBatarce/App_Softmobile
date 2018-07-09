import React from 'react';
import { View, TextInput,Text, Button,  Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class PrimaryLoginPage extends React.Component {    
    
 constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            favSport: undefined,
            items: [
                {
                    label: 'Isabela',
                    value: 'Isabela',
                },
                {
                    label: 'Lara',
                    value: 'Lara',
                },
                {
                    label: 'Pedro',
                    value: 'Pedro',
                },
            ],
        };
    }

    render(){
        return(
      
      <View >
        <Text>Vendedor(a)</Text>
        <RNPickerSelect
            placeholder={{
                label: 'Selecione o vendedor',
                value: null,
            }}
            items={this.state.items}
            onValueChange={(value) => {
                this.setState({
                    favSport: value,
                });
            }}
            onUpArrow={() => {
                this.inputRefs.picker.togglePicker();
            }}
            onDownArrow={() => {
                this.inputRefs.company.focus();
            }}

            style={{ ...pickerSelectStyles }}

            
            value={this.state.favSport}
            ref={(el) => {
                this.inputRefs.picker2 = el;
            }}
        />
              
        

 </View>
        );
    }
}

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        
        paddingTop: 13,
        paddingBottom: 12,
        backgroundColor: 'white',
        color: '#636e72',
    },
});      



