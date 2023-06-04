import React, { useState } from "react";
import { StyleSheet, View, Alert, ScrollView } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contexts/UserContext";
import { login } from "../services/Auth.services";

import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";
import Logo from "../components/Logo";
import MediumButton from "../components/MediumButton";

const Login = () => {
  const navigation = useNavigation();
  const { setSigned } = useUser();
  const [email, setEmail] = useState('firstep@gmail.com');
  const [password, setPassword] = useState('firstep');

  const handleLogin = () => {
    login({
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res && res.user) {
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
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
          <MediumButton onPress={() => setSigned(true)} title="LOGIN" />
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
