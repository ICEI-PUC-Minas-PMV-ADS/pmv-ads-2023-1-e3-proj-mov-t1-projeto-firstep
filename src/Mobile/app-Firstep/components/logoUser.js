import React from 'react';
import { StyleSheet, Image, View } from 'react-native';


const LogoUser = () => {
  return   <View style={styles.logo}>
              <Image style={styles.image} source={require('../assets/contato.png')} />
            </View>
          
};

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 60,
        marginTop: 60,
        marginLeft: 20,

    },
});

export default LogoUser;