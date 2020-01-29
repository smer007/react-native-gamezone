import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';

export default function ReviewDetails({ navigation }) {
  const stars = getStars(navigation.getParam('rating'));

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
        <Text style={globalStyles.titleText}>{ navigation.getParam('body') }</Text>
        <View style={styles.rating}>
          {stars}
        </View>
      </Card>
    </View>
  );
}

const getStars = rating => {
  const STAR_ICON = <MaterialIcons name="star" size={30} style={styles.icon} />;
  let table = [];
  let i = 0
    while (i < rating) {
      table.push(STAR_ICON);
      i++;
    }

    return table;
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  icon: {
    color: 'coral'
  }
})
