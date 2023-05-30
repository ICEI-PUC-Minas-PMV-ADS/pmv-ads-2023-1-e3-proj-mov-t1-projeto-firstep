import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';


import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import TextTitle from '../components/TextTitle';
import Text1 from '../components/Text1';
import Button1 from '../components/Button1';

import { insertProjetos, updateProjetos } from '../services/Projetos.services';

import { useNavigation } from '@react-navigation/native';

const CadastroProjeto = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params ? route.params : {};

    const [nomeProjeto, setNomeProjeto] = useState('');
    const [autorProjeto, setAutorProjeto] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [tecnologias, setTecnologias] = useState('');
    const [descricaoProjeto, setDescricaoProjeto] = useState('');
    const [descricaoVaga, setDescricaoVaga] = useState('');
    const [repositorio, setRepositorio] = useState('');
    const [quantidadeParticipante, setQuantidadeParticipante] = useState('');


    useEffect(() => {
        if (item) {
            setNomeProjeto(item.nomeProjeto);
            setAutorProjeto(item.autorProjeto);
            setEmailUsuario(item.emailUsuario);
            setTecnologias(item.tecnologias);
            setDescricaoProjeto(item.descricaoProjeto);
            setDescricaoVaga(item.descricaoVaga);
            setRepositorio(item.repositorio);
        }

    }, [item]);

    const handleSalvar = () => {
        if (item) {
            updateProjetos({
                "id": item.id,
                "nomeProjeto": nomeProjeto,
                "emailUsuario": emailUsuario,
                "descricaoProjeto": descricaoProjeto,
                "tecnologias": tecnologias,
                "descricaoVaga": descricaoVaga,
                "Finalizado": false,
                "repositorio": repositorio,
                "autorProjeto": autorProjeto,
                "quantidadeParticipante": quantidadeParticipante,
                "participantesProjeto": [],
            }).then(res => { navigation.goBack(); });
        } else {
            insertProjetos({
                "nomeProjeto": nomeProjeto,
                "emailUsuario": emailUsuario,
                "descricaoProjeto": descricaoProjeto,
                "tecnologias": tecnologias,
                "descricaoVaga": descricaoVaga,
                "Finalizado": false,
                "repositorio": repositorio,
                "autorProjeto": autorProjeto,
                "quantidadeParticipante": 1,
                "participantesProjeto": [],
            }).then(res => {
                navigation.goBack();
            });
        }
    };



    return (
        <Container>
            <ScrollView>
                <Logo />
                <TextTitle title="Criar Projeto" />
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
                    <Text1 title="*Obrigatório" />
                    {item
                        ? <Button1
                            title="Editar dados"
                            onPress={handleSalvar}
                        />
                        : <Button1
                            title="Criar Projeto"
                            onPress={handleSalvar}
                        />
                    }
                    <Button1
                        title="Voltar"
                        onPress={() => navigation.goBack()}
                    />
                </Body>
            </ScrollView>
        </Container>
    );
};



export default CadastroProjeto;
