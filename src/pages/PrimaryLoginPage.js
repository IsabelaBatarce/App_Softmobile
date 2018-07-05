import React from 'react';
import { Picker, Container, Content} from 'native-base';
import { View, TextInput,Text, StyleSheet,  Alert } from 'react-native';
import { connectStyle } from 'native-base';
import PickerInput from '../components/PickerInput';
import UnderlinedTextbox from '../components/UnderlinedTextbox';
import ButtonSize from '../components/ButtonSize';

import {Font} from 'expo';


class PrimaryLoginPage extends React.Component {
	/**/




    render(){
    	  const styles = this.props.style;
        return(
        	
        	<Container style={styles.container} >
     
        		<PickerInput  />
        		<UnderlinedTextbox />

        		<ButtonSize style={styles.inputButton} />
        	
        	</Container>
        	


)}

}


const styles = {
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 30,
		marginTop: 10,
		marginBottom: 20,
		justifyContent:'space-between'

	},
	inputPassword:{
		
		
	},
	
	inputButton:{

		
	}
}


export default connectStyle('yourTheme.PrimaryLoginPage', styles)(PrimaryLoginPage);
