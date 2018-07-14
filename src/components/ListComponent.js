import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements';


 const ListComponent = ({ onPressItemList, list }) => {
    return (
      <List>
        {
          {list}.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
            />
          ))
        }
      </List>
    )
}

const styles = StyleSheet.create({

})

export default ListComponent;
