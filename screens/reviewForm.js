
import React from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text
} from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('numBetween1to5', 'Rating must be 1 to 5', val => (
      [1,2,3,4,5].includes(Number(val))
    ))
})

export default function ReviewForm({ addReview }) {

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }} >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Review title'
              onBlur={props.handleBlur('title')}
              onChangeText={props.handleChange('title')}
              value={props.values.title} />
            <Text style={globalStyles.errorText}>
              { props.touched.title && props.errors.title }
            </Text>

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Review details'
              onBlur={props.handleBlur('body')}
              onChangeText={props.handleChange('body')}
              value={props.values.body} />
            <Text style={globalStyles.errorText}>
              { props.touched.body && props.errors.body }
            </Text>

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Rating (1 - 5)'
              onBlur={props.handleBlur('rating')}
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric' />
            <Text style={globalStyles.errorText}>
              { props.touched.rating && props.errors.rating }
            </Text>

            <TouchableWithoutFeedback onPress={props.handleSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});
