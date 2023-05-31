import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import { getProjetoEspecifico, getProjetos, insertProjetos, updateProjetos } from '../services/Projetos.services';
import { useNavigation } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';

import Container from '../components/Container';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Body from '../components/Body';


const Inscrever = ({route}) => {
  const { item } = route.params ? route.params : {};

  const { nome } = useUser();
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [emailUsuario, setEmailUsuario] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [tecnologias, setTecnologias] = useState('');
  const [descricaoVaga, setDescricaoVaga] = useState('');
  const [repositorio, setRepositorio] = useState('');
  const [autorProjeto, setAutorProjeto] = useState('');
  const [quantidadeParticipante, setQuantidadeParticipante] = useState('');
  const [finalizado, setFinalizado] = useState('');
  const [participantesProjeto, setParticipantesProjeto] = useState(['']);

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchProjetos()
  }, [isFocused])

  async function fetchProjetos() {

    console.log(item)
    const res = await getProjetoEspecifico(item.id)
    console.log(res)
    setId(res.id)
    console.log(res)
    setNomeProjeto(res.nomeProjeto)
    setEmailUsuario(res.emailUsuario)
    setDescricaoProjeto(res.descricaoProjeto)
    setTecnologias(res.tecnologias)
    setDescricaoVaga(res.descricaoVaga)
    setRepositorio(res.repositorio)
    setAutorProjeto(res.autorProjeto)
    setQuantidadeParticipante(res.quantidadeParticipante)
    setFinalizado(res.finalizado)
    setParticipantesProjeto(res.participantesProjeto)
  };

  const handleSalvar = () => {
    if (quantidadeParticipante <= 5) {
      const novaLista = adicionarNovoParticipante()
      updateProjetos({
        "id": id,
        "nomeProjeto": nomeProjeto,
        "emailUsuario": emailUsuario,
        "descricaoProjeto": descricaoProjeto,
        "tecnologias": tecnologias,
        "descricaoVaga": descricaoVaga,
        "Finalizado": false,
        "repositorio": repositorio,
        "autorProjeto": autorProjeto,
        "quantidadeParticipante": quantidadeParticipante + 1,
        "participantesProjeto": novaLista
      });
      fetchProjetos()
    } else {
      Alert.alert('Limite máximo de participantes foi atingido');
    }
  };
  
const adicionarNovoParticipante  = () => {
  const array = participantesProjeto
 array.push(nome)
 return array

}
  return (
    <Container>
      <ScrollView>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Body>
          <Text style={styles.titulo}>{nomeProjeto}</Text>
          <Card>
            <Text style={styles.texto}>{descricaoProjeto}</Text>
          </Card>
          <Card>
            <Text style={styles.texto}>{descricaoVaga}</Text>
          </Card>
          <Card>
            <Text style={styles.texto}>Tecnologias Utilizadas: </Text>
            <Text style={styles.texto}>{tecnologias}</Text>
          </Card>

          <Text style={styles.quantPart}>
            Quantidade de Participantes: {quantidadeParticipante}
          </Text>

          <Button
            style={styles.button}
            mode="contained"
            onPress={handleSalvar}>
            Candidatar-se
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
  texto: {
    fontSize: 15,
  },

  button: {
    marginVertical: 8,
    marginHorizontal: 40,
    backgroundColor: '#3E2500',
  },

  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 25,
  },

  quantPart: {
    fontSize: 18,
    marginBottom: 15,
    marginVertical: 8,
    marginHorizontal: 40,
    textAlign: 'center',
  },

  logo: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Inscrever;
