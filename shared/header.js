import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={30}
        style={styles.iconMenu}
        onPress={openMenu} />
      <View style={styles.title}>
        <MaterialIcons
          name="audiotrack"
          style={styles.iconTitle}
          size={30} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  iconMenu: {
    position: 'absolute',
    left: 0
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  },
  title: {
    flexDirection: 'row'
  },
  iconTitle: {
    color: 'blue'
  }
})
