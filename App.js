import { createStackNavigator } from 'react-navigation';
import React from 'react';
import MenuPage from './src/pages/MenuPage';
import PrimaryLogin from './src/pages/PrimaryLogin';
import { Image } from 'react-native';


class LogoTitle extends React.Component {

  render() {
    return (
      <Image
        source={require('./outline_perm_identity_white_36dp.png')}
        style={{ width: 70, height: 70 }}
      />
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
            height: 250,


       },
        }
      },

    'MenuPage': {
        screen: MenuPage,
        navigationOptions:{
          title: 'Menu'
        }
      }
    }, {
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
