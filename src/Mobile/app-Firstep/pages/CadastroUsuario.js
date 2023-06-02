import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Button1 from '../components/Button1';
import { insertUsuarios, updateUsuarios, deleteUsuarios } from '../services/Usuarios.services';
import { useNavigation } from '@react-navigation/native';

const CadastroUsuario = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params ? route.params : {};

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
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
                "nome": nomeUsuario,
                "email": emailUsuario,
                "password": senhaUsuario,
                "descricaoPerfil": descricaoUsuario,
                "repositorio": repositorio,
            }).then(res => { navigation.goBack(); });
        } else {
            insertUsuarios({
                "nome": nomeUsuario,
                "email": emailUsuario,
                "password": senhaUsuario,
                "descricaoPerfil": descricaoUsuario,
                "repositorio": repositorio,
            }).then(res => {
                navigation.goBack();
            });
        }
    };

    return (
        <Container>
            <ScrollView>
                <Logo />
                <Headline style={styles.textTitulo}>Cadastre-se</Headline>
            <Body>
                <Input
                    label="* Nome:"
                    value={nomeUsuario}
                    onChangeText={(text) => setNomeUsuario(text)}
                />
                <Input
                    label="* E-mail:"
                    value={emailUsuario}
                    onChangeText={(text) => setEmailUsuario(text)}
                />
                <Input
                    label="* Senha:"
                    value={senhaUsuario}
                    onChangeText={(text) => setSenhaUsuario(text)}
                />
                <Input
                    label="* Descrição:"
                    value={descricaoUsuario}
                    onChangeText={(text) => setDescricaoUsuario(text)}
                />
                <Input
                    label="* Github:"
                    value={repositorio}
                    onChangeText={(text) => setRepositorio(text)}
                />
                <Headline style={styles.textObservacao}>*Obrigatório</Headline>
                    <Button1
                            title="Enviar Cadastro"
                            onPress={handleSalvar}
                    />
            </Body>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({

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
