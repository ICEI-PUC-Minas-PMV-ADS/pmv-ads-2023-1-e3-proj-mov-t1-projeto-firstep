import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SmallText = ( props ) => {
    return  <Text style={styles.texto}>{props.title}{props.name}</Text>
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 15,
        padding: 3,
        textAlign: 'center',
    }
});

export default SmallText;