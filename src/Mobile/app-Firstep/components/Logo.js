import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Container from './Container';

const Logo = () => {
  return  <Container> 
            <View style={styles.logo}>
              <Image style={styles.image} source={require('../assets/logo.png')} />
            </View>
          </Container>
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
