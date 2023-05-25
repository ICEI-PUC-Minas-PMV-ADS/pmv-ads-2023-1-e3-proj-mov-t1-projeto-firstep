import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Headline } from 'react-native-paper';
import Container from './Container';

const TextTitle = (props) => {
  return  <Container> 
            <Headline style={styles.textTitulo}>{props.title}{props.name}</Headline>
          </Container>
};

const styles = StyleSheet.create({
    textTitulo: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    }
});

export default TextTitle;
