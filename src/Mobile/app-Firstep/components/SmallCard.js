import React from 'react';
import { StyleSheet, View } from 'react-native';

const SmallCard = ( {children} ) => {
    return  <View style={styles.littleCard}>
                {children}
            </View>
};

const styles = StyleSheet.create({
    littleCard: {
        width: "48.7%",
        height: 140,
        borderRadius: 10,
        backgroundColor: "#F6E984",
        padding: 10,
        marginVertical: 5,
        flexDirection: "column",
        justifyContent: "space-evenly",
    }
});

export default SmallCard;