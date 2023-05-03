import React, { useState } from 'react';
import {View,StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';

import Container from '../components/Container';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Body from '../components/Body';

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

  return (
    <Container>
      <ScrollView>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Body>
        <Text style={styles.titulo}>{DATA.nomeProjeto}</Text>
        <Card>
          <Text style={styles.texto}>{DATA.descricaoProjeto}</Text>
        </Card>
        <Card>
          <Text style={styles.texto}>{DATA.descricaoVaga}</Text>
        </Card>
        <Card>
          <Text style={styles.texto}>Tecnologias Utilizadas: </Text>
          <Text style={styles.texto}>{DATA.tecnologias}</Text>
        </Card>

        <Text style={styles.quantPart}>
          Quantidade de Participantes: {DATA.quantidadeParticipante}
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
    fontSize: 25,
    marginVertical: 8,
    marginHorizontal: 40,
    textAlign: 'center',
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
