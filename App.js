import { createStackNavigator } from 'react-navigation';
import React from 'react';

import MenuPage from './src/pages/MenuPage';
import CategoryItensPage from './src/pages/CategoryItensPage';
import PrimaryLogin from './src/pages/PrimaryLogin';
import SecondaryLogin from './src/pages/SecondaryLogin';
import { Image, View } from 'react-native';


class LogoTitle extends React.Component {

  render() {
    return (
      <View style = {{
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center',}}>
      <Image
        source={require('./outline_perm_identity_white_36dp.png')}
        style={{ width: 100, height:100 }}
      />
      </View>
    );
  }
}

/*class PrimaryLogin extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
}
  }
};
*/
const RootStack = createStackNavigator({
    
     'Login': {
        screen: PrimaryLogin,
        navigationOptions:{
          headerTitle: <LogoTitle />,
        headerStyle: {
            backgroundColor: '#e24d4d',
            height: 250
            }
        }
      },

      'SecondaryLogin':{
        screen: SecondaryLogin,
        navigationOptions:{
          headerTitle: <LogoTitle />,
        headerStyle: {
            backgroundColor: '#e24d4d',
            height: 250
            }
        }
      },

      'MenuPage': {
        screen: MenuPage
    },

      'CategoryItensPage': {
      screen: CategoryItensPage
    }
    },{
       
       navigationOptions: {
       title: "SoftMobile",
       headerTintColor: '#f5f6fa',
       headerStyle: {
            backgroundColor: '#e24d4d',
       },
       
       headerTitleStyle: {
           color: '#f5f6fa',
           fontSize: 25
       }
   }
})


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
