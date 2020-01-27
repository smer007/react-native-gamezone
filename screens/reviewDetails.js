import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
      </Card>
      <Card>
        <Text style={globalStyles.titleText}>{ navigation.getParam('body') }</Text>
      </Card>
      <Card>
        <Text style={globalStyles.titleText}>{ navigation.getParam('rating') }</Text>
      </Card>
    </View>
  );
}
