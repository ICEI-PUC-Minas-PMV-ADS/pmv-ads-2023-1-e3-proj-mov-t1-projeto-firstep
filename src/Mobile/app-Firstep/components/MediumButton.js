import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const MediumButton = (props) => {
    return  <Button
    mode="contained"
    onPress={props.onPress}
    style={styles.button}>
      {props.title}
    </Button>
};

const styles = StyleSheet.create({
    button: {
      marginVertical: 8,
      marginHorizontal: 40,
      backgroundColor: '#3E2500',
    }
});

export default MediumButton;