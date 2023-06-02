import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

const Keyboard = ({ children }) => {
  return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            {children}
        </KeyboardAvoidingView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdd57',
  },
});

export default Keyboard;