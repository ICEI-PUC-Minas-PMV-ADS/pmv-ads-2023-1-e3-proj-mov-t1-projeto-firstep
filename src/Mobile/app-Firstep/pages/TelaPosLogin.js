import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { Headline, List } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from "../contexts/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Container from '../components/Container';
import Body from '../components/Body';
import Card from '../components/Card';
import { getProjetos } from '../services/Projetos.services';
import Input from '../components/Input';
import ButtonLogout from '../components/ButtonLogout';


const Logo2 = () => {
    return <Image source={require('../assets/contato.png')} />
};

const TelaPosLogin = () => {
    const navigation = useNavigation();
    const { name, setSigned } = useUser();
    const isFocused = useIsFocused();
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [MeusProjetos, setMeusProjetos] = useState([]);
    const [Projetos, setProjetos] = useState([]);

    useEffect(() => {
        getProjetos().then((dados) => {
            setFilteredData(dados);
            setMasterData(dados);
            const projetosFiltrados = dados.filter(e => e.participantesProjeto.includes(name));
            setMeusProjetos(projetosFiltrados);
            const projetosNaoCadastrados = dados.filter(e => !e.participantesProjeto.includes(name));
            setProjetos(projetosNaoCadastrados);
        })
    }, [isFocused]);

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter(
                function (item) {
                    if (item.nomeProjeto) {
                        const itemData = item.nomeProjeto.toUpperCase();
                        const textData = text.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    }
                });
            setFilteredData(newData);

            const projetosNaoCadastrados = newData.filter(e => !e.participantesProjeto.includes(name));
            setProjetos(projetosNaoCadastrados);
            const projetosFiltrados = newData.filter(e => e.participantesProjeto.includes(name));
            setMeusProjetos(projetosFiltrados);

        } else {
            setFilteredData(masterData);

            const projetosNaoCadastrados = masterData.filter(e => !e.participantesProjeto.includes(name));
            setProjetos(projetosNaoCadastrados);
            const projetosFiltrados = masterData.filter(e => e.participantesProjeto.includes(name));
            setMeusProjetos(projetosFiltrados);
        }
        setSearch(text);
    };


    const ItemView = ({ item }) => {
        console.log(item);
        return (
            <List.Item
                title={item.nomeProjeto}
                left={props => <List.Icon {...props} icon={require('../assets/icoLista.png')} />}
                onPress={() => navigation.navigate('RealizacaoProjeto', { item })}
            />
        )
    }

    const ItemView_k = ({ item }) => {
        return (
            <List.Item
                title={item.nomeProjeto}
                left={props => <List.Icon {...props} icon={require('../assets/icoLista.png')} />}
                onPress={() => navigation.navigate('Inscrever', { item })}
            />
        )
    }

    const handleLogout = async () => {
        setSigned(false);
        AsyncStorage.removeItem('@TOKEN_KEY');

    }

    return (
        <Container>
            <View style={styles.logo}>
                <Logo2 />
                <Headline>Olá {name},</Headline>
            </View>
            <ButtonLogout onPress={handleLogout} />
            <Body>
                <Input
                    onChangeText={(text) => searchFilter(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Buscar projetos"
                />
                <Text style={styles.subTitle}>Meus Projetos</Text>
                <Card>
                    <FlatList
                        data={MeusProjetos}
                        keyExtractor={item => item.id}
                        renderItem={ItemView}
                    />
                </Card>


                <Text style={styles.subTitle}>Projetos em andamento</Text>
                <Card>
                    <FlatList
                        data={Projetos}
                        keyExtractor={item => item.id}
                        renderItem={ItemView_k}
                    />
                </Card>

            </Body>
        </Container>
    );
};


const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 120,
        marginTop: 60,
        marginLeft: 20,

    },

    subTitle: {
        fontSize: 20,

    }
}
);

export default TelaPosLogin;
