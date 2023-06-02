import React, { useState, useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import * as Yup from 'yup';


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

    async function handleSalvar() {
       try{
        const schema = Yup.object().shape({
            nomeProjeto: Yup.string().required("Nome do projeto é obrigatório"),
            autorProjeto: Yup.string().required("Nome obrigatório"),
            emailUsuario: Yup.string().required("E-mail obrigatório").email("Email inválido"),
            tecnologias:  Yup.string().required("Obrigatório informar as tecnologias utilizadas"),
            descricaoProjeto: Yup.string().required("Descrição do projeto é obrigatório"),
            descricaoVaga: Yup.string().required("Descrição da vaga é obrigatória"),
            repositorio: Yup.string().required("Obrigatório informar o repositório")
        })
       await schema.validate({nomeProjeto, autorProjeto, emailUsuario, tecnologias, descricaoProjeto, descricaoVaga, repositorio})
       
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
    
       Alert.alert('Cadastro realizado com sucesso!')
       } catch(error){
        if(error instanceof Yup.ValidationError){
          Alert.alert(error.message)
        }
    }};

    async function handleEditar() {
        try{
         const schema = Yup.object().shape({
             nomeProjeto: Yup.string().required("Nome do projeto é obrigatório"),
             autorProjeto: Yup.string().required("Nome obrigatório"),
             emailUsuario: Yup.string().required("E-mail obrigatório").email("Email inválido"),
             tecnologias:  Yup.string().required("Obrigatório informar as tecnologias utilizadas"),
             descricaoProjeto: Yup.string().required("Descrição do projeto é obrigatório"),
             descricaoVaga: Yup.string().required("Descrição da vaga é obrigatória"),
             repositorio: Yup.string().required("Obrigatório informar o repositório")
         })
        await schema.validate({nomeProjeto, autorProjeto, emailUsuario, tecnologias, descricaoProjeto, descricaoVaga, repositorio})
        if(item){
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
             "quantidadeParticipante": 1,
             "participantesProjeto": [],
         }).then(res => {
             navigation.goBack();
         });
         Alert.alert('Cadastro editado com sucesso!')
        }} catch(error){
         if(error instanceof Yup.ValidationError){
           Alert.alert(error.message)
         }
     }};

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
                            onPress={handleEditar}
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
