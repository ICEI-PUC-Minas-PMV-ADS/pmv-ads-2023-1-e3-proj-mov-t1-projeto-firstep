import React from 'react';
import { StyleSheet, Image, View } from 'react-native';


const Logo = () => {
  return   <View style={styles.logo}>
              <Image style={styles.image} source={require('../assets/logo.png')} />
            </View>
          
};

const styles = StyleSheet.create({
  image: {
  width: 200,
  height: 120,
  marginTop: 40,
  },
  logo: {
    alignItems: 'center',
    marginTop: 10,
  }
});

export default Logo;
