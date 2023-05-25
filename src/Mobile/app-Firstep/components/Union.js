import React from 'react';
import { StyleSheet, View } from 'react-native';

const Union = ({ children }) => {
    return <View style={styles.uniao}>{children}</View>;
};

const styles = StyleSheet.create({
    uniao: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    }
});

export default Union;
