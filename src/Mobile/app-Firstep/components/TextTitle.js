import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Headline } from 'react-native-paper';


const TextTitle = (props) => {
  return   <Headline style={styles.textTitulo}>{props.title}{props.name}</Headline>
          
};

const styles = StyleSheet.create({
    textTitulo: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    }
});

export default TextTitle;
