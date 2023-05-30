import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import { insertUsuarios, updateUsuarios, deleteUsuarios } from '../services/Usuarios.services';
import { useNavigation } from '@react-navigation/native';

const CadastroUsuario = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params ? route.params : {};

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhalUsuario, setSenhaUsuario] = useState('');
    const [descricaoUsuario, setDescricaoUsuario] = useState('');
    const [repositorio, setRepositorio] = useState('');


    useEffect(() => {
        if (item) {
            setNomeUsuario(item.nomeUsuario);
            setEmailUsuario(item.emailUsuario);
            setSenhaUsuario(item.senhaUsuario);
            setDescricaoUsuario(item.descricaoUsuario);
            setRepositorio(item.repositorio);
        }

    }, [item]);

    const handleSalvar = () => {
        if (item) {
            updateUsuarios({
                "id": item.id,
                "nomeUsuario": nomeUsuario,
                "emailUsuario": emailUsuario,
                "senhaUsuario": senhaUsuario,
                "descricaoUsuario": descricaoUsuario,
                "repositorio": repositorio,
            }).then(res => { navigation.goBack(); });
        } else {
            insertUsuarios({
                "nomeUsuario": nomeUsuario,
                "emailUsuario": emailUsuario,
                "senhaUsuario": senhaUsuario,
                "descricaoUsuario": descricaoUsuario,
                "repositorio": repositorio,
            }).then(res => {
                navigation.goBack();
            });
        }
    };

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
                    onChangeText={(text) => setNomeUsuario(text)}
                />
                <Input
                    label="* E-mail:"
                    value={email}
                    onChangeText={(text) => setEmailUsuario(text)}
                />
                <Input
                    label="* Senha:"
                    value={senha}
                    onChangeText={(text) => setSenhaUsuario(text)}
                />
                <Input
                    label="* Descrição:"
                    value={descricaoAluno}
                    onChangeText={(text) => setDescricaoUsuario(text)}
                />
                <Input
                    label="* Github:"
                    value={github}
                    onChangeText={(text) => setRepositorio(text)}
                />
                <Headline style={styles.textObservacao}>*Obrigatório</Headline>
                    item
                        ? <Button1
                            title="Enviar Cadastro"
                            onPress={handleSalvar}
                        />
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
