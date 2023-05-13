import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Headline } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { insertProjetos, updateProjetos, deleteProjetos } from '../services/Projetos.services';

import { useNavigation } from '@react-navigation/native';

const CadastroProjeto = () => {
    const navigation = useNavigation();

    const [nomeProjeto, setNomeProjeto] = useState('');
    const [autorProjeto, setAutorProjeto] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [tecnologias, setTecnologias] = useState('');
    const [descricaoProjeto, setDescricaoProjeto] = useState('');
    const [descricaoVaga, setDescricaoVaga] = useState('');
    const [repositorio, setRepositorio] = useState('');

    return (
        <Container>
             <ScrollView>
            <View style={styles.logo}>
                <Logo />
            </View>
            <Headline style={styles.textTitulo}>Criar Projeto</Headline>
            <Body>
                <Input
                    label="* Nome do Projeto:"
                    value={nomeProjeto}
                    onChangeText={(text) => setNomeProjeto(text)}
                />
                <Input
                    label="* Autor do Projeto:"
                    value={autorProjeto}
                    onChangeText={(text) => setAutorProjeto(text)}
                />
                <Input
                    label="* E-mail do usuário:"
                    value={emailUsuario}
                    onChangeText={(text) => setEmailUsuario(text)}
                />
                <Input
                    label="* Tecnologias Utilizadas:"
                    value={tecnologias}
                    onChangeText={(text) => setTecnologias(text)}
                />
                <Input
                    label="* Descrição do Projeto:"
                    value={descricaoProjeto}
                    onChangeText={(text) => setDescricaoProjeto(text)}
                />
                <Input
                    label="* Descrição da Vaga:"
                    value={descricaoVaga}
                    onChangeText={(text) => setDescricaoVaga(text)}
                />
                <Input
                    label="* Repositório:"
                    value={repositorio}
                    onChangeText={(text) => setRepositorio(text)}
                />
                <Headline style={styles.textObservacao}>*Obrigatório</Headline>
                <Button
                    mode="contained"
                    onPress={() => console.log('Pressed')}
                    style={styles.button}>
                    Criar Projeto
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.goBack()}
                    style={styles.button}>
                    Voltar
                </Button>
            </Body>
            </ScrollView>
        </Container>
       );
};

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        marginTop: 10,
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
        borderRadius: 10,
        marginTop: 10,
    },
});

export default CadastroProjeto;
