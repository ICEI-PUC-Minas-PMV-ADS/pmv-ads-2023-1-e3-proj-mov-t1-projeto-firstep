import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, ScrollView } from 'react-native';
import { Headline, List, RadioButton } from 'react-native-paper';
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
import LogoUser from '../components/logoUser';




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
    const [checked, setChecked] = React.useState('finalizado');

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
            if (checked == 'finalizado') {
                setMeusProjetos(projetosFiltrados.filter(e => e.Finalizado === true));
            } else {
                setMeusProjetos(projetosFiltrados.filter(e => e.Finalizado === false));
            }

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
            <View>
                <LogoUser />
                <Headline>Olá {name},</Headline>
            </View>
            <ButtonLogout onPress={handleLogout} />
            <Body>
                <ScrollView>
                    <Input
                        onChangeText={(text) => searchFilter(text)}
                        value={search}
                        underlineColorAndroid="transparent"
                        placeholder="Buscar projetos"
                    />

                    <View style={styles.radio}>
                        <View style={styles.ritem}>
                        <Text>Finalizados</Text>
                            <RadioButton
                                value="finalizado"
                                status={checked === 'finalizado' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('finalizado')}
                            />
                        </View>
                        <View style={styles.ritem}>

                            <Text>Em andamento</Text>
                            <RadioButton
                                value="andamento"
                                status={checked === 'andamento' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('andamento')}
                            />
                        </View>
                    </View>
                    <Text style={styles.sub}>Meus Projetos</Text>
                    <Card>
                        <FlatList
                            data={MeusProjetos}
                            keyExtractor={item => item.id}
                            renderItem={ItemView}
                        />
                    </Card>
                    <Text style={styles.sub}>Projetos em andamento</Text>
                    <Card>
                        <FlatList
                            data={Projetos}
                            keyExtractor={item => item.id}
                            renderItem={ItemView_k}
                        />
                    </Card>
                </ScrollView>
            </Body>
        </Container>
    );
};
const styles = StyleSheet.create({
    sub: {
        fontSize: 25,
    },
    radio: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
},
    ritem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-evenly',
}
});
export default TelaPosLogin;
