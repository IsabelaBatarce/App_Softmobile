import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';

import SearchBar from './src/components/SearchBar';
import ListSyncSalesPage from './src/pages/ListSyncSalesPage';
import AddProductPage from './src/pages/AddProductPage';
import ListItemCategoryPage from './src/pages/ListItemCategoryPage';
import ItemCategoryPage from './src/pages/ItemCategoryPage';
import ListDidntSyncSalesPage from './src/pages/ListDidntSyncSalesPage';
import MenuPage from './src/pages/MenuPage';
import CategoryItensPage from './src/pages/CategoryItensPage';
import AddClientPage from './src/pages/AddClientPage';
import PrimaryLogin from './src/pages/PrimaryLogin';
import SecondaryLogin from './src/pages/SecondaryLogin';
import ClientFilterPage from './src/pages/ClientFilterPage';
import ListClientPage from './src/pages/ListClientPage';
import ListSalesPage from './src/pages/ListSalesPage';
import ProductDetailsPage from './src/pages/ProductDetailsPage';
import ClientDetailsPage from './src/pages/ClientDetailsPage';
import { Toolbar } from 'react-native-material-ui';


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
  'AddProductPage':{
      screen:AddProductPage
  },
  'ItemCategoryPage':{
    screen:ItemCategoryPage
  },
  'ListItemCategoryPage':{
    screen:ListItemCategoryPage
  },
  
  'ListDidntSyncSalesPage':{
    screen:ListDidntSyncSalesPage
 },
 
 'ListSyncSalesPage':{
    screen:ListSyncSalesPage
 },


 'ListSalesPage':{
      screen: ListSalesPage
    },

 'AddClientPage':{
    screen: AddClientPage,
   },

 'ListClientPage':{
      screen: ListClientPage,
   },

   
 'ClientDetailsPage': {
      screen: ClientDetailsPage
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
