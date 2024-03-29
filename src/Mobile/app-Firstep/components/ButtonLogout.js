import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ButtonLogout = (props) => {
   
    return <Button  mode="text"  onPress={props.onPress} style={styles.button}>
        <Icon name="logout" size={22} color={'#3E2500'}/>
    </Button>
          
  
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute', 
        right: 0,
        marginTop: 40,
        marginRight: 5,
        padding: 15
            
    }
});

export default ButtonLogout;