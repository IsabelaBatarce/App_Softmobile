import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements';


 const ListComponent = ({ onPressItemList }) => {
    return (
      <List>
      { list.map((l, i) => (
        <TouchableOpacity onPress={ onPressItemList, nameItem }>
        <ListItem
          key={i}
          title={nameItem}
        />
        </TouchableOpacity>
      ))}
      </List>
    );
  }
}

const styles = StyleSheet.create({

})

export default ListComponent;
