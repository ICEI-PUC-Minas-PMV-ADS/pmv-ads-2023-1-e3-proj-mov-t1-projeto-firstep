import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Body from './Body';
import Container from './Container';

const ButtonEnd = (props) => {
    return <Container>
        <Body>
            <View style={styles.view}>
                <Button
                    color={"#3E2500"}
                    onPress={props.onPress}
                    title={props.title}
                />
                <Icon name="check-bold" size={20} color={"#3E2500"}/>
            </View>
        </Body>
    </Container>
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "start",
        flexDirection: "row-reverse",
        alignItems: 'center'
    }
});

export default ButtonEnd;