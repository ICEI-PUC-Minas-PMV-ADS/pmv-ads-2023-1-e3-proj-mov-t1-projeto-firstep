import react from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, Text } from 'react-native-paper';

const SwitchFinalizado = (props) => {

    return  <View style={styles.view}> 
               <Text style={styles.texto}>Finalizado</Text>
               <Switch 
               value={props.value} 
               onValueChange={props.onValueChange} 
               color={'#348AA7'}
               style={styles.switch}/>
            </View>
        ;
};

const styles = StyleSheet.create({
    view:{
      marginBottom: 10
    },
    texto: {
        fontSize: 20,
        marginTop: 10,
        padding: 3,
      },
      switch: {
        position: 'absolute',
       right: 0
      }
});

export default SwitchFinalizado;