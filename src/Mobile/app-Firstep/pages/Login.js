import React, { useState } from "react";
import { StyleSheet, View, Alert, ScrollView } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from "../contexts/UserContext";
import { login } from "../services/Auth.services";

import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";
import Logo from "../components/Logo";
import MediumButton from "../components/MediumButton";

const Login = () => {
  const navigation = useNavigation();
  const { setSigned, setUserName } = useUser();
  const [email, setEmail] = useState('firstep@gmail.com');
  const [password, setPassword] = useState('firstep');

  const handleLogin = async () => {
    login({
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res && res.users) {
        console.log('Passou no if')
        setSigned(true);
        console.log(res.users)
        setUserName(res.users.nome);
        AsyncStorage.setItem('@TOKEN_KEY', res.access_token);
      } else {
        Alert.alert('Atenção, Usuário ou senha inválidos!');
      }
    });
  };
  return (
    <Container>
      <ScrollView>
        <Logo />

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
          <MediumButton onPress={handleLogin} title="LOGIN" />
          <MediumButton
            onPress={() => navigation.navigate('Register')}
            title="REGISTRAR"
          />
        </Body>
      </ScrollView>
    </Container>
  );
};
export default Login;
