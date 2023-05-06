import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [descricaoAluno, setDescricaoAluno] = useState('');
    const [github, setGithub] = useState('');

    return (
        <Container>
            <View style={styles.logo}>
                <Logo />
            </View>
                <Headline style={styles.textTitulo}>Cadastre-se</Headline>
            <Body>
                <Input
                    label="* Nome:"
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />
                <Input
                    label="* E-mail:"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    label="* Senha:"
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />
                <Input
                    label="* Descrição:"
                    value={descricaoAluno}
                    onChangeText={(text) => setDescricaoAluno(text)}
                />
                <Input
                    label="* Github:"
                    value={github}
                    onChangeText={(text) => setGithub(text)}
                />
                <Headline style={styles.textObservacao}>*Obrigatório</Headline>
                <Button
                    mode="contained"
                    onPress={() => console.log('Pressed')}
                    style={styles.button}>
                    Enviar Cadastro
                </Button>
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
    },
    textTitulo: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    textObservacao: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3E2500',
        borderRadius: 5.0,
        margin: 10
    },
});

export default CadastroUsuario;
