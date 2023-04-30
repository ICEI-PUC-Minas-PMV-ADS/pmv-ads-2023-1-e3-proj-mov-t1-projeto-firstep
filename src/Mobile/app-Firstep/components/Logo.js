import React from 'react';
import { StyleSheet, Image } from 'react-native';



const Logo = () => {
  return <Image style={styles.image} source={require('../assets/logo.png')} />
};

const styles = StyleSheet.create({
  image: {
  width: 200,
  height: 120,
  marginTop: 40,
  },
});

export default Logo;
