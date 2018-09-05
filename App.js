import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { MaterialHeaderButtons, Items } from './src/components/MyHeaderButtons';

import Search from './src/components/Search';
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
import GridsScreen from './src/pages/GridsScreen';



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
              headerLeft: null,
              headerStyle: {
                backgroundColor: '#e24d4d',
                height: 250
                }
                
            }
          },
'ListSalesPage':{
      screen: ListSalesPage,
      navigationOptions:{
      headerRight: (
    <MaterialHeaderButtons>
      <Items title="Search" iconName="search" onPress={() => console.warn('add')} />
    </MaterialHeaderButtons>
      )
    }
  },
   
    'MenuPage': {
      screen: MenuPage
    },
  'ListClientPage':{
      screen: ListClientPage,
  },

'FilterSyncSalesPage':{
  screen:FilterSyncSalesPage
},

'ListProductsPage':{
    screen:ListProductsPage,

    navigationOptions:{
        
        headerRight: (
          <MaterialHeaderButtons>
            <Items title="Search" iconName="search" color="white" onPress={() => console.warn('add')} />
          </MaterialHeaderButtons>
          
      ),
    }
  },

 'ProductDetailsPage':{
    screen: ProductDetailsPage
 },


  'ItemCategoryPage':{
    screen:ItemCategoryPage
  },


'ListDidntSyncSalesPage':{
    screen:ListDidntSyncSalesPage,

    navigationOptions:{
        
        headerRight: (
          <MaterialHeaderButtons>
            <Items title="Search" iconName="search" color="white" onPress={() => console.warn('add')} />
          </MaterialHeaderButtons>
          
      ),
    }
 },



 'ListSyncSalesPage':{
    screen:ListSyncSalesPage,

    navigationOptions:{
        
        headerRight: (
          <MaterialHeaderButtons>
            <Items title="Search" iconName="search" color="white" onPress={() => console.warn('add')} />
          </MaterialHeaderButtons>
          
      ),
    }
 },

  'AddClientPage':{
    screen: AddClientPage,
   },

 'ClientDetailsPage': {
      screen: ClientDetailsPage,

      navigationOptions:{
        
        headerRight: (
          <MaterialHeaderButtons>
            <Items title="Search" iconName="more-vert" color="white" onPress={() => console.warn('add')} />
          </MaterialHeaderButtons>
          
      ),
    }
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
