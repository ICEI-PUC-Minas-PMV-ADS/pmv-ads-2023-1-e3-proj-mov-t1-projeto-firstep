import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { Button, Headline, List } from 'react-native-paper';



import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Card from '../components/Card';
import Logo from '../components/Logo';

import { getProjetos } from '../services/Projetos.services';    

/*const DATA = [
    {
        id: 1,
        projeto: 'Encante com a música',
    },
    {
        id: 2,
        projeto: 'Agircont',
    },
    {
        id: 3,
        projeto: 'Firstep',
    },
];*/




const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const Logo2 = () => {
    return <Image source={require('../assets/contato.png')} />
};

const TelaPosLogin = () => {
        const [projetos, setProjetos] = useState([]);
    
        useEffect(() => {
            getProjetos().then((dados)=>{
                setProjetos(dados);  

              console.log(dados);
          
        });
        },[]);

    const renderItem = ({ item }) => (
        <List.Item styles = {styles.itens}
            title={item.nomeProjeto}
           left={props => <List.Icon {...props} icon={require('../assets/icoLista.png')} />}
        />
    );

    return (
        <Container>

            <View style={styles.logo}>      
                <Logo2 />
                <Headline>Olá Usuário,</Headline>
            </View>
            <Headline style={styles.textTitulo}>Projetos em andamento</Headline>
            <Body>
               <Card>
                    <FlatList
                        data={projetos}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
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
}
);

export default TelaPosLogin;
