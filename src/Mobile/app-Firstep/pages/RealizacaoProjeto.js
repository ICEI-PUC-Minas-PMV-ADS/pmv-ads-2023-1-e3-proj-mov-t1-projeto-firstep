import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import { getProjetos, insertProjetos, updateProjetos } from '../services/Projetos.services';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';
import Card from '../components/Card';
//import Button1 from '../components/Button1';

const RealizacaoProjeto = () => {
  const [id, setId] = useState('');
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [tecnologias, setTecnologias] = useState('');
  const [descricaoVaga, setDescricaoVaga] = useState('');
  const [repositorio, setRepositorio] = useState('');
  const [emailUsuario, setEmailUsuario] = useState('');
  const [autorProjeto, setAutorProjeto] = useState('');
  const [participantesProjeto, setParticipantesProjeto] = useState([]);

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchProjetos()
  }, [isFocused])

  async function fetchProjetos() {

    const res = await getProjetos("3")
    setId(res.id)
    setNomeProjeto(res.nomeProjeto)
    setDescricaoProjeto(res.descricaoProjeto)
    setTecnologias(res.tecnologias)
    setDescricaoVaga(res.descricaoVaga)
    setRepositorio(res.repositorio)
    setEmailUsuario(res.emailUsuario)
    setAutorProjeto(res.autorProjeto)
    setParticipantesProjeto(res.participantesProjeto)
  };

  return (
    <Container>
      <ScrollView>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Headline style={styles.textTitulo}>{nomeProjeto}</Headline>
        <Body>
          <View>
            <Card>
              <Text style={styles.texto}>Descrição do projeto:</Text>
              <Text style={styles.texto}>{descricaoProjeto}</Text>
            </Card>
          </View>
          <View>
            <Card>
              <Text style={styles.texto}>Descrição da vaga:</Text>
              <Text style={styles.texto}>{descricaoVaga}</Text>
            </Card>
          </View>
          <View>
            <Card>
              <Text style={styles.texto}>Tecnologias utilizadas:</Text>
              <Text style={styles.texto}>{tecnologias}</Text>
            </Card>
          </View>
          <View>
            <Card>
              <Text style={styles.texto}>Autor do projeto: {autorProjeto}</Text>
              <Text style={styles.texto}>Email do usuário: {emailUsuario}</Text>
              <Text style={styles.texto}>Repositório: {repositorio}</Text>
            </Card>
          </View>
          <View style={styles.uniao}>
            <View style={styles.card2}>
              <Text style={styles.texto2}>Precisa de ajuda?</Text>
              <Button
                mode="contained"
                onPress={() => console.log('Solicitar tutor')}
                style={styles.button}>
                Solicitar Tutor
              </Button>
            </View>
            <View style={styles.card2}>
              <Text style={styles.texto}>{participantesProjeto}</Text>
            </View>
          </View>
          <Button
            mode="contained"
            onPress={() => console.log('Sair do projeto')}
            style={styles.button}>
            Sair do projeto
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
  button: {
    backgroundColor: '#3E2500',
    borderRadius: 10,
    alignItems: "center"
  },
  button: {
    backgroundColor: '#3E2500',
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center"
  },
  texto: {
    fontSize: 15,
    padding: 3,
  },
  texto2: {
    fontSize: 15,
    padding: 3,
    textAlign: 'center',
  },
  card2: {
    width: "48.7%",
    height: 140,
    borderRadius: 10,
    backgroundColor: "#F6E984",
    padding: 10,
    marginVertical: 5,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  uniao: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
});

export default RealizacaoProjeto;
