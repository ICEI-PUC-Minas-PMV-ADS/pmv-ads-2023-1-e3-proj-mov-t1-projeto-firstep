import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';

const Subtitle = ( props ) => {
    return  <Text style={styles.sub}>{props.title}{props.name}</Text>
};

const styles = StyleSheet.create({
    sub: {
        fontSize: 30,
    }
});

export default Subtitle;