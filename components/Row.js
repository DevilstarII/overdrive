// flow
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.picture.large }} style={styles.photo} />
    <Text style={styles.text}>
      {moment().format('ll')}
    </Text>
    {/* <Text style={styles.text}>
      {moment().format('ll')}
    </Text> */}
    {/* <Text style={styles.text}>
      {moment().format('ll')}
    </Text> */}
  </View>
);

export default Row;
