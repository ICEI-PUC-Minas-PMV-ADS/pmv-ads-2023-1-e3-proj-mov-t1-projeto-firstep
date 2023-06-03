import React from 'react';
import { StyleSheet, Text } from 'react-native';

const QuantParticipantes = (props) => {
  return  <Text style={styles.quantPart}>{props.title}{props.name}</Text>
};

const styles = StyleSheet.create({
  quantPart: {
    fontSize: 18,
    marginBottom: 15,
    marginVertical: 10,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});

export default QuantParticipantes;