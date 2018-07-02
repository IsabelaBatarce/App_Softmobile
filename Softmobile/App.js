import { StackNavigator } from 'react-navigation';

import PrimaryLoginPage from './src/pages/PrimaryLoginPage';
import SecondaryLoginPage from './src/pages/SecondaryLoginPage';
import SyncPage from './src/pages/SyncPage';
import  SelectionPage from './src/pages/SelectionPage'


export default StackNavigator({
  'SelectionPage':{
    screen: SelectionPage
  },
  'PrimaryLogin':{
    screen: PrimaryLoginPage
  },
  'SecondaryLogin':{
    screen: SecondaryLoginPage
  },
  'Sync':{
    screen: SyncPage
  }


},{
  navigationOptions:{
    title: "SoftMobile",
    headerTintColor: "#ecf0f1",
    headerStyle:{
      backgroundColor: "#8e44ad",
      justifyContent:'center'

    },
    headerTitleStyle:{
      color: "#ecf0f1",
      fontSize: 25,
      textAlign: 'center',

    }
  }

})
