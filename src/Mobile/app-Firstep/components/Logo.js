import React from 'react';
import { StyleSheet, Image } from 'react-native';



const Logo = () => {
  return <Image style={styles.image} source={require('../assets/logo.png')} />
};

const styles = StyleSheet.create({
  image: {
  width: 120,
  height: 120,
  },
});

export default Logo;