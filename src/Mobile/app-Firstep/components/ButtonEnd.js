import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
//import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Body from './Body';
import Container from './Container';

const ButtonEnd = (props) => {
    return <Container>
        <Body>
            <View style={styles.view}>
                <Button
                    color={props.color}
                    onPress={props.onPress}
                    title={props.title}
                />
                <Icon name="check-bold" size="20" color={props.color}/>
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