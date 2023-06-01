import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, SafeAreaView, TextInput } from 'react-native';
import { Button, Headline, List } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Card from '../components/Card';
import Logo from '../components/Logo';

import { getProjetos } from '../services/Projetos.services';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const Logo2 = () => {
    return <Image source={require('../assets/contato.png')} />
};

const TelaPosLogin = () => {
    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);


    useEffect(() => {
        getProjetos().then((dados) => {

            setFilteredData(dados);
            setMasterData(dados);
        })
    }, []);

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
        } else {
            setFilteredData(masterData);
        }
        setSearch(text);
    };

    const ItemView = ({ item }) => {
        return (
            <List.Item styles={styles.itens}
                title={item.nomeProjeto}
                left={props => <List.Icon {...props} icon={require('../assets/icoLista.png')} />}
                onPress={() => navigation.navigate('RealizacaoProjeto', {item})} 
            />
        )
    }

    const ItemView_k = ({ item }) => {
        return (
            <List.Item styles={styles.itens}
                title={item.nomeProjeto}
                left={props => <List.Icon {...props} icon={require('../assets/icoLista.png')} />}
                onPress={() => navigation.navigate('Inscrever', {item})} 
            />
        )
    }

    const getItem = (item) => {
        alert('Id : ' + item.id + '\n\nTarefa : ' + item.title + '\n\nCompletada: ' + item.completed);
    };

    return (
        <Container>

            <View style={styles.logo}>
                <Logo2 />
                <Headline>Olá Usuário,</Headline>
            </View>
            <Body>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => searchFilter(text)}
                        value={search}
                        underlineColorAndroid="transparent"
                        placeholder="Buscar projetos"
                    />
                    <Text>Meus Projetos</Text>
                    <Card>
                        <FlatList
                            data={filteredData}
                            keyExtractor={item => item.id}
                            renderItem={ItemView}
                        />
                    </Card>
                    <Text>Projetos em andamento</Text>
                    <Card>
                        <FlatList
                            data={filteredData}
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
    textTitulo: {
        fontWeight: 'bold',
        textAlign: 'left',
        margin: 20,
    },

    itens: {
        fontWeight: 'bold'
    },

    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
       borderRadius: 18,
       
    }
}
);

export default TelaPosLogin;
