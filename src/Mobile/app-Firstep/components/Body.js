import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = ({ children }) => {
  return <View style={styles.body}>{children}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffdd57',
    margin: 10,
  },
});

export default Body;