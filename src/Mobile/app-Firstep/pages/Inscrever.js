import React, { useState, useEffect } from 'react';
import {View,StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import Container from '../components/Container';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Body from '../components/Body';
import { getProjetos } from '../services/Inscrever.services';


const Inscrever = () => {
  const [id, setId] = useState('');
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [tecnologias, setTecnologias] = useState('');
  const [descricaoVaga, setdescricaoVaga] = useState('');
  const [repositorio, setRepositorio] = useState('');
  const [autorProjeto, setAutorProjeto] = useState('');
  const [quantidadeParticipante, setquantidadeParticipante] = useState('');

  const DATA = {
    id: 1,
    nomeProjeto: 'Agricont',
    descricaoProjeto:
      'O projeto consiste em uma página web para gestão patrimonial de agricultores.',
    tecnologias: 'HTML, CSS, BootStrap, NET C#,SQLServer',
    descricaoVaga: 'Empresa: Juninho - Dev fullstack jr -  Salário: À Combinar',
    repositorio:
      'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-projeto-agricont',
    autorProjeto: 'Maria José',
    quantidadeParticipante: 3,
  };

  const isFocused = useIsFocused();

  useEffect (() => {
fetchProjetos()
  }, [isFocused])

  async function fetchProjetos(){

    const res = await getProjetos("1")
    setId(res.id)
    console.log(res)
    setNomeProjeto(res.nomeProjeto)
    setDescricaoProjeto(res.descricaoProjeto)
    setTecnologias(res.tecnologias)
    setdescricaoVaga(res.descricaoVaga)
    setquantidadeParticipante(res.quantidadeParticipante)
  
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
          onPress={() => console.log('Pressed')}>
          Candidatar-se
        </Button>

        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
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
