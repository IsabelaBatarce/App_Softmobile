import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';


import MenuPage from './src/pages/MenuPage';
import CategoryItensPage from './src/pages/CategoryItensPage';
import PrimaryLogin from './src/pages/PrimaryLogin';
import SecondaryLogin from './src/pages/SecondaryLogin';
import ClientFilterPage from './src/pages/ClientFilterPage';
import ListProdutsPage from './src/pages/ListProdutsPage';
import ListClientPage from './src/pages/ListClientPage';
import ListSalesPage from './src/pages/ListSalesPage';
import ProductDetailsPage from './src/pages/ProductDetailsPage';
import ClientDetailsPage from './src/pages/ClientDetailsPage';


class LogoTitle extends React.Component {

  render() {
    return (
      <View style = {{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',}}>
      <Image
        source={require('./src/images/outline_perm_identity_white_48.png')}
        style={{ width: 100, height:100 }}
      />
      </View>
    );
  }
};




const RootStack = createStackNavigator({
     'ClientDetailsPage': {
      screen: ClientDetailsPage
    },
  
    
    'ListClientPage':{
      screen: ListClientPage
    },


    'ListSalesPage':{
      screen: ListSalesPage
    },

     'ClientFilterPage':{
      screen: ClientFilterPage
    },


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
    },

   
    'ListProdutsPage':{
      screen: ListProdutsPage
    },
   
    'ProductDetailsPage': {
      screen: ProductDetailsPage
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
