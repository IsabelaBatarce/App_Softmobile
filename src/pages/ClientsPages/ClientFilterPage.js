import React from 'react';
import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity,ScrollView} from 'react-native';
import Picker from '../../components/Picker';
import { Card, Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

export default class ClientFilterPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
     
        headerLeft:(
         <TouchableOpacity
           style={{marginLeft: 20}}>
           <Icon name='arrow-back' color='white' />
           </TouchableOpacity>
        )
      }
  
  render() {
  	return(
      <View style={{flex:1}}>
        <ActionButton 
          buttonColor="rgba(231,76,60,1)" 
          spacing={10} >
          <ActionButton.Item buttonColor='#009688' 
                title="Adicionar" 
                size={46}
                onPress={() => this.props.navigation.navigate('AddClientPage')}>
              <Icon 
                name="person-add" 
                color="white" 
                style={styles.actionButtonIcon} />
                </ActionButton.Item>
              </ActionButton>

      <Card containerStyle = {styles.container} >
  		
  		<Image
        source={require('../../images/clientfilter.png')}
        style={styles.image}
      	/>
  		
  		<View  style = {styles.picker}>
  			<Picker/>
  		</View>
      </Card>
        
  		</View>
      )

  }

}

const styles = StyleSheet.create({

	container:{

	    backgroundColor: '#f7f7f7',
        marginTop: 50,
        elevation: 2,
        flex: 1,
        marginBottom: 150
        


    },
    picker:{
    	marginTop: 45,

    },

    image:{
        marginTop: 40,
        width: 100, 
    	height: 100 ,
    	alignSelf: 'center',
    	marginBottom: 30
    },
    actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
	
	})