import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Headline } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

import Logo from '../components/Logo';

const CadastroProjeto = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tec, setTec] = useState('');
    const [descricaoProj, setDescricaoProj] = useState('');
    const [descricaoVaga, setDescricaoVaga] = useState('');
    const [repositorio, setRepositorio] = useState('');



    return (
        <Container>

            <View style={styles.logo}>

                <Logo />
            </View>
            <Headline style={styles.textTitulo}>Criar Projeto</Headline>
            <Body>
                <Input
                    label="Nome do Projeto:"
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />
                <Input
                    label="E-mail do usuário:"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    label="Tecnologias Utilizadas:"
                    value={tec}
                    onChangeText={(text) => setTec(text)}
                />
                <Input
                    label="Descrição do Projeto:"
                    value={descricaoProj}
                    onChangeText={(text) => setDescricaoProj(text)}
                />
                <Input
                    label="Descrição da Vaga:"
                    value={descricaoVaga}
                    onChangeText={(text) => setDescricaoVaga(text)}
                />
                <Input
                    label="Repositório:"
                    value={repositorio}
                    onChangeText={(text) => setRepositorio(text)}
                />
                <Button
                    mode="contained"
                    onPress={() => console.log('Pressed')}
                    style={styles.button}>
                    Criar Projeto
                </Button>
            </Body>

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
    button: {
        backgroundColor: '#3E2500',
        borderRadius: 10,
    },
});

export default CadastroProjeto;
