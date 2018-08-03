import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import SearchBar from './src/components/SearchBar';
import ListSyncSalesPage from './src/pages/SalesPages/ListSyncSalesPage';
import FilterSyncSalesPage from './src/pages/SalesPages/FilterSyncSalesPage';
import ListSyncErrorSalesPage from './src/pages/SalesPages/ListSyncErrorSalesPage';
import test from './src/pages/test';
import ListProductsPage from './src/pages/ProductsPages/ListProductsPage';
import ItemCategoryPage from './src/pages/ItemCategoryPage';
import ListDidntSyncSalesPage from './src/pages/SalesPages/ListDidntSyncSalesPage';
import MenuPage from './src/pages/MenuPage';
import CategoryItensPage from './src/pages/CategoryItensPage';
import AddClientPage from './src/pages/ClientsPages/AddClientPage';
import PrimaryLogin from './src/pages/LoginPages/PrimaryLogin';
import SecondaryLogin from './src/pages/LoginPages/SecondaryLogin';
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
<<<<<<< HEAD
'ListSalesPage':{
      screen: ListSalesPage
    },
'test':{
  screen:test
} ,
'FilterSyncSalesPage':{
  screen:FilterSyncSalesPage
},
 
=======

  'ListSalesPage':{
       screen: ListSalesPage
  },
>>>>>>> ac3ffe4703c463277646d85f9bc20856bbe3f2a3

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

<<<<<<< HEAD
'ListClientPage':{
      screen: ListClientPage,
   },
'ListProductsPage':{
=======

  'ListClientPage':{
      screen: ListClientPage,
   },

 'ListProductsPage':{
>>>>>>> ac3ffe4703c463277646d85f9bc20856bbe3f2a3
    screen:ListProductsPage
  },
'ListClientPage':{
      screen: ListClientPage,
   },
<<<<<<< HEAD

'ProductDetailsPage':{
    screen: ProductDetailsPage
 },
'ItemCategoryPage':{
    screen:ItemCategoryPage
  },

'ListDidntSyncSalesPage':{
    screen:ListDidntSyncSalesPage
 },
'ListSyncErrorSalesPage':{
  screen: ListSyncErrorSalesPage
},
'ListSyncSalesPage':{
=======
 'ListClientPage':{
     screen: ListClientPage,
  },

 'ProductDetailsPage':{
    screen: ProductDetailsPage
 },


  'ItemCategoryPage':{
    screen:ItemCategoryPage
  },


'ListDidntSyncSalesPage':{
    screen:ListDidntSyncSalesPage
 },



 'ListSyncSalesPage':{
>>>>>>> ac3ffe4703c463277646d85f9bc20856bbe3f2a3
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
