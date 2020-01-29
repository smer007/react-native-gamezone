import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation: { navigate } }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1'
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2'
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3'
    },
  ]);

  const addReview = values => {
    values.key = reviews.length + 1;
    setReviews(currentReviews => {
      return [values, ...currentReviews];
    });
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen}>
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={20}
            style={{ ...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setModalOpen(false)} />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={20}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} />

      <FlatList
        data={reviews}
        renderItem={({ item, item: { title } }) => (
          <TouchableOpacity
            onPress={() => navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{title}</Text>
            </Card>
          </TouchableOpacity>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1
  },
  modalToggle: {
    marginBottom: 10,
    padding: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 10,
    marginBottom: 0
  }
})
