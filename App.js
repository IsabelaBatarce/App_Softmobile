import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import SearchBar from './src/components/SearchBar';
import ListSyncSalesPage from './src/pages/SalesPages/ListSyncSalesPage';
import test from './src/pages/test';
import ListProductsPage from './src/pages/ProductsPages/ListProductsPage';
import ItemCategoryPage from './src/pages/ItemCategoryPage';
import ListDidntSyncSalesPage from './src/pages/SalesPages/ListDidntSyncSalesPage';
import MenuPage from './src/pages/MenuPage';
import CategoryItensPage from './src/pages/CategoryItensPage';
import AddClientPage from './src/pages/ClientsPages/AddClientPage';
import PrimaryLogin from './src/pages/LoginPages/PrimaryLogin';
import SecondaryLogin from './src/pages/LoginPages/SecondaryLogin';
import ClientFilterPage from './src/pages/ClientsPages/ClientFilterPage';
import ListClientPage from './src/pages/ClientsPages/ListClientPage';
import ListSalesPage from './src/pages/SalesPages/ListSalesPage';
import ProductDetailsPage from './src/pages/ProductsPages/ProductDetailsPage';
import ClientDetailsPage from './src/pages/ClientsPages/ClientDetailsPage';



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
 'ListClientPage':{
      screen: ListClientPage,
   },
 'SecondaryLogin': {
        screen: SecondaryLogin,
        navigationOptions:{
          headerTitle: <LogoTitle />,
        headerStyle: {
            backgroundColor: '#e24d4d',
            height: 250
            }
        }
      },
 'ListProductsPage':{
    screen:ListProductsPage
  },
 'ProductDetailsPage':{
    screen: ProductDetailsPage
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




  'ItemCategoryPage':{
    screen:ItemCategoryPage
  },

 'ListSalesPage':{
      screen: ListSalesPage
    },
'ListDidntSyncSalesPage':{
    screen:ListDidntSyncSalesPage
 },
'ClientFilterPage':{
      screen: ClientFilterPage
    },


'test':{
  screen:test
} ,

 'ListSyncSalesPage':{
    screen:ListSyncSalesPage
 },

  'AddClientPage':{
    screen: AddClientPage,
   },

 'ClientDetailsPage': {
      screen: ClientDetailsPage
    },


    'MenuPage': {
      screen: MenuPage
    },

    'CategoryItensPage': {
      screen: CategoryItensPage
    },



  },{

       navigationOptions: {
       title: "SoftMobile",
       headerTintColor: '#f5f6fa',
       headerStyle: {
            backgroundColor: '#bf360c',
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
