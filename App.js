import { createStackNavigator } from 'react-navigation';

import MenuPage from './src/pages/MenuPage';

export default createStackNavigator({
    'MenuPage': {
        screen: MenuPage,
        navigationOptions:{
          title: 'Menu'
        }
    }
}, {
  navigationOptions: {
       title: "SoftMoble",
       headerTintColor: 'white',
       headerStyle: {
            backgroundColor: '#e24d4d',
       },
       headerTitleStyle: {
           color: 'white',
           fontSize: 25
       }
   }
})
