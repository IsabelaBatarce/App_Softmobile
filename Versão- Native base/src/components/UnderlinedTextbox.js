import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon } from 'native-base';
export default class UnderlinedTextbox extends Component {
  render() {
    return (
      <Container>
        
        <Content>
          <Item>
             <Icon active name='home' />
            <Input placeholder="Underline Textbox" />
          </Item>
        </Content>
      </Container>
    );
  }
}