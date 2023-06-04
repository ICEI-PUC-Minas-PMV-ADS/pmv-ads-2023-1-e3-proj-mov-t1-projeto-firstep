import React, { useState, useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import * as Yup from 'yup';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Button1 from '../components/Button1';
import TextTitle from '../components/TextTitle';
import Text1 from '../components/Text1';
import { insertUsuarios, updateUsuarios } from '../services/Usuarios.services';
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

    async function handleSalvar() {
        try{
         const schema = Yup.object().shape({
             nomeUsuario: Yup.string().required("Nome do projeto é obrigatório"),
             emailUsuario: Yup.string().required("E-mail obrigatório").email("Email inválido"),
             senhaUsuario: Yup.string().required("Senha obrigatória"),
             descricaoUsuario: Yup.string().required("Descrição do projeto é obrigatório"),
             repositorio: Yup.string().required("Obrigatório informar o repositório")
         })
        await schema.validate({nomeUsuario, emailUsuario, senhaUsuario, descricaoUsuario, repositorio})
        
        if (item) {
            updateUsuarios({
                "id": item.id,
                "nome": nomeUsuario,
                "email": emailUsuario,
                "password": senhaUsuario,
                "descricaoPerfil": descricaoUsuario,
                "repositorio": repositorio,
            }).then(res => { 
                navigation.goBack();
            });
        Alert.alert('Usuário editado com sucesso!')
        } else {
            insertUsuarios({
                "nome": nomeUsuario,
                "email": emailUsuario,
                "password": senhaUsuario,
                "descricaoPerfil": descricaoUsuario,
                "repositorio": repositorio,
            }).then(res => {
                navigation.goBack();
                console.log(res);
            });
            Alert.alert('Usuário cadastrado com sucesso!')
        } }catch(error){
         if(error instanceof Yup.ValidationError){
           Alert.alert(error.message)
         }
     }};

    return (
        <Container>
            <ScrollView>
                <Logo />
                <TextTitle title="Cadastre-se" />
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
                    secureTextEntry
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
                <Text1 title="*Obrigatório" />
                {item
                        ? <Button1
                            title="Editar cadastro"
                            onPress={handleSalvar}
                        />
                        : <Button1
                            title="Cadastre-se"
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

export default CadastroUsuario;