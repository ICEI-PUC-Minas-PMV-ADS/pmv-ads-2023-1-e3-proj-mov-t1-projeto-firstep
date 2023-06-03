import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import { getProjetoEspecifico, getProjetos, insertProjetos, updateProjetos } from '../services/Projetos.services';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

import Container from '../components/Container';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Body from '../components/Body';
import TextTitle from '../components/TextTitle';
import Text1 from '../components/Text1';
import QuantParticipantes from '../components/QuantParticipantes';
import MediumButton from '../components/MediumButton';

const Inscrever = ({ route }) => {
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

  const adicionarNovoParticipante = () => {
    const array = participantesProjeto
    array.push(nome)
    return array
  }
  return (
    <Container>
      <ScrollView>
        <Logo />
        <Body>
          <TextTitle title={nomeProjeto} />
          <Card>
            <Text1 title="Descrição do projeto:" />
            <Text1 name={descricaoProjeto} />
          </Card>
          <Card>
            <Text1 title="Descrição da vaga:" />
            <Text1 name={descricaoVaga} />
          </Card>
          <Card>
            <Text1 title="Tecnologias utilizadas:" />
            <Text1 name={tecnologias} />
          </Card>

          <QuantParticipantes title="Quantidade de Participantes: " Text1 name={quantidadeParticipante} />

          <MediumButton
            onPress={handleSalvar} title="Candidatar-se"
          />
          <MediumButton
            onPress={() => navigation.goBack()} title="Voltar"
          />
        </Body>
      </ScrollView>
    </Container>
  );
};

export default Inscrever;
