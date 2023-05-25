import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Button1 = (props) => {
    return  <Button
                mode="contained"
                onPress={props.onPress}
                style={styles.button}>
                    {props.title}
            </Button>
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3E2500',
        borderRadius: 10,
        marginTop: 10,
    }
});

export default Button1;