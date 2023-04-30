import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Headline } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';

const RealizacaoProjeto = () => {
  const [nomeProjeto] = useState('');
  const [descricaoProjeto] = useState('');
  const [email] = useState('');
  const [tecnologia] = useState('');
  const [autorProjeto] = useState('');
  const [descricaoVaga] = useState('');
  const [contato] = useState('');

  const DATA = {
    id: 1,
    nomeProjeto: 'Agricont',
    descricaoProjeto:
      'O projeto consiste em uma página web para gestão patrimonial de agricultores.',
    tecnologias: 
      'HTML, CSS, BootStrap, NET C#, SQLServer',
    vaga:
      'Vaga: Dev fullstack jr',
    empresa: 
      'Empresa: Juninhos LTDA',
    salario:
      'Salário: À Combinar',
    repositorio:
      'Repositório: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-projeto-agricont',
    contato:
      'Contato: junior123@gmail.com',
    autorProjeto: [
      'Carolina Vitória ',
      'Cláudia Carapiá ',
      'Douglas Raynner ',
      'Jéssica Grimaldi ',
      'Jeferson Queiroz ',
      'Karen Noguti ']
  };

  return (
    <Container>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Headline style={styles.textTitulo}>{DATA.nomeProjeto}</Headline>
      <Body>
      <View style={styles.card}>
        <Text style={styles.texto}>{DATA.descricaoProjeto}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.texto}>{DATA.vaga}</Text>
        <Text style={styles.texto}>{DATA.empresa}</Text>
        <Text style={styles.texto}>{DATA.salario}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.texto}>Tecnologias utilizadas:</Text>
        <Text style={styles.texto}>{DATA.tecnologias}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.texto}>{DATA.repositorio}</Text>
        <Text style={styles.texto}>{DATA.contato}</Text>
      </View>
      <View style={styles.uniao}>
      <View style={styles.card2}>
        <Text style={styles.texto2}>Precisa de ajuda?</Text>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.button}>
          Solicitar Tutor
        </Button>
      </View>
      <View style={styles.card2}>
        <Text style={styles.texto}>{DATA.autorProjeto}</Text>
      </View>
      </View>
      </Body>
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
    backgroundColor: '#4AC288',
    borderRadius: 10,
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
  card: { 
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#F6E984",
    padding: 10,
    marginVertical: 5
  },
  card2: { 
    width: "48.7%",
    height: 140,
    borderRadius: 10,
    backgroundColor: "#F6E984",
    padding:10,
    marginVertical:5,
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
