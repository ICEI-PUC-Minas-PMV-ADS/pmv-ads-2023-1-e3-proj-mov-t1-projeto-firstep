import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { updateProjetos, deleteProjetos } from '../services/Projetos.services';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';
import Card from '../components/Card';
import TextTitle from '../components/TextTitle';
import Button1 from '../components/Button1';
import Text1 from '../components/Text1';
import Union from '../components/Union';
import SmallCard from '../components/SmallCard';
import SmallText from '../components/SmallText';
import ButtonIcon from '../components/ButtonIcon';
import ButtonEnd from '../components/ButtonEnd';

const RealizacaoProjeto = ({ route }) => {
  const { item } = route.params ? route.params : {};
  const { name } = useUser();
  const [id, setId] = useState('');
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [tecnologias, setTecnologias] = useState('');
  const [descricaoVaga, setDescricaoVaga] = useState('');
  const [repositorio, setRepositorio] = useState('');
  const [emailUsuario, setEmailUsuario] = useState('');
  const [autorProjeto, setAutorProjeto] = useState('');
  const [quantidadeParticipante, setQuantidadeParticipante] = useState('');
  const [finalizado, setFinalizado] = useState(false);
  const [participantesProjeto, setParticipantesProjeto] = useState(['']);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (item) {
      setId(item.id)
      setNomeProjeto(item.nomeProjeto)
      setDescricaoProjeto(item.descricaoProjeto)
      setTecnologias(item.tecnologias)
      setDescricaoVaga(item.descricaoVaga)
      setRepositorio(item.repositorio)
      setEmailUsuario(item.emailUsuario)
      setAutorProjeto(item.autorProjeto)
      setFinalizado(item.finalizado)
      setQuantidadeParticipante(item.quantidadeParticipante)
      setParticipantesProjeto(item.participantesProjeto)
    }
  }, [isFocused])

  const handleExcluir = () => {
    deleteProjetos(item.id).then(res => { navigation.goBack(); });
  }

  const removerParticipante = () => {
    const array = participantesProjeto;
    for (i = 0; i < 6; i++) {
      if (participantesProjeto[i] === name) {
        array.splice(i, 1);
        novaArray = array;
      }
      else {
        novaArray = array;
      }
    }
    return novaArray;
  }

  const handleSair = () => {
    if (quantidadeParticipante > 0) {
      const novaLista = removerParticipante()
      updateProjetos({
        "id": id,
        "nomeProjeto": nomeProjeto,
        "emailUsuario": emailUsuario,
        "descricaoProjeto": descricaoProjeto,
        "tecnologias": tecnologias,
        "descricaoVaga": descricaoVaga,
        "Finalizado": finalizado,
        "repositorio": repositorio,
        "autorProjeto": autorProjeto,
        "quantidadeParticipante": quantidadeParticipante - 1,
        "participantesProjeto": novaLista
      }).then(res => {
        navigation.goBack();
      });
      Alert.alert('Você saiu do projeto');
    } else {
      Alert.alert('Você já saiu do projeto');
    }
  }

  const finalizadorDeProjeto = () => {
    updateProjetos({
      "id": id,
      "nomeProjeto": nomeProjeto,
      "emailUsuario": emailUsuario,
      "descricaoProjeto": descricaoProjeto,
      "tecnologias": tecnologias,
      "descricaoVaga": descricaoVaga,
      "Finalizado": true,
      "repositorio": repositorio,
      "autorProjeto": autorProjeto,
      "quantidadeParticipante": quantidadeParticipante,
      "participantesProjeto": participantesProjeto
    });
  }

  const ativadorDeProjeto = () => {
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
      "quantidadeParticipante": quantidadeParticipante,
      "participantesProjeto": participantesProjeto
    });
  }

  const finalizarProjeto = () => {
    if (item) {
      if (!finalizado) {
        Alert.alert('Deseja finalizar o projeto?', [
          { text: 'OK', onPress: () => finalizadorDeProjeto }, { text: 'Cancel', onPress: () => console.log('Cancelar'), style: 'cancel' }
        ]);
      } else {
        Alert.alert('Deseja ativar o projeto novamente?', [
          { text: 'OK', onPress: () => ativadorDeProjeto }, { text: 'Cancel', onPress: () => console.log('Cancelar'), style: 'cancel' }
        ]);
      }
    } else {
      Alert.alert('Você não selecionou nenhum projeto!');
    }
  }

  return (
    <Container>
      <ScrollView>
        <Logo />
        <TextTitle title={nomeProjeto} />
        <Body>
          <View>
            <Card>
              <Text1 title="Descrição do projeto:" />
              <Text1 name={descricaoProjeto} />
            </Card>
          </View>
          <View>
            <Card>
              <Text1 title="Descrição da vaga:" />
              <Text1 name={descricaoVaga} />
            </Card>
          </View>
          <View>
            <Card>
              <Text1 title="Tecnologias utilizadas:" />
              <Text1 name={tecnologias} />
            </Card>
          </View>
          <View>
            <Card>
              <Text1 title="Autor do projeto: " name={autorProjeto} />
              <Text1 title="Email do usuário: " name={emailUsuario} />
              <Text1 title="Repositório: " name={repositorio} />
            </Card>
          </View>
          <Union>
            <SmallCard>
              <SmallText title="Precisa de ajuda?" />
              <Button1 onPress={() => console.log('Solicitar tutor')} title="Solicitar Tutor" />
            </SmallCard>
            <SmallCard>
              <SmallText name={participantesProjeto} />
            </SmallCard>
          </Union>

          <View style={styles.button2}>
            <ButtonIcon onPress={handleSair} icon="account-multiple-minus" />

            <ButtonIcon onPress={() => navigation.navigate('CadastroProjeto', { item })} icon="file-document" />
            <ButtonIcon onPress={handleExcluir} icon="trash-can" />

            <ButtonIcon onPress={() => navigation.goBack()} icon="keyboard-backspace" />
          </View>

        </Body>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  button2: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  }
}
);

export default RealizacaoProjeto;