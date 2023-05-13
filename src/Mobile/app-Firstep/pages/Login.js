import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import {useUser} from '../contexts/UserContext';

import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();

  const { setSigned } = useUser();

  const [email, setEmail] = useState('firstep@gmail.com');
  const [password, setPassword] = useState('firstep');

    const handleLogin= () => {

    login({
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      }else{
         Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }

    });
    
  }

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>

      

      <Body>
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => setSigned(true)}>
          LOGIN
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Register')}>
          Registrar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
    marginHorizontal: 40,
    backgroundColor: '#3E2500',
  },
 
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },
});

export default Login;
