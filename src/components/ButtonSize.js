import React, { Component } from 'react';
import { Container, Content, Button, Text, connectStyle } from 'native-base';
import { StyleSheet } from 'react-native';
import {Font} from 'expo'

class ButtonSize extends React.Component {
  




  render() {


    const styles = this.props.style;
    return (

  

      <Container>
        
        <Content>
         
          <Button success >
            <Text style = { {
             fontFamily: 'Roboto', 
            
             color: '#f5f6fa' } } >entrar</Text>
          </Button>
       
        </Content>
      </Container>
    );
  }
}

const styles = {
  container :{
     fontFamily : 'sans-serif'
  }

}


export default connectStyle('yourTheme.ButtonSize', styles)(ButtonSize);
