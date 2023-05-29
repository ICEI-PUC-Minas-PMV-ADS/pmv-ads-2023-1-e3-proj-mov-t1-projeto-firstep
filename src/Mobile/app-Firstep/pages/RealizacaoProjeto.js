import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { getProjetos, insertProjetos, updateProjetos } from '../services/Projetos.services';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

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

//import { updateProjetos, insertProjetos, deleteProjetos } from '../services/Projetos.services';

const RealizacaoProjeto = ({route}) => {
  const {item} = route.params ? route.params:{};
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
    if(item){
    setId(item.id)
    setNomeProjeto(item.nomeProjeto)
    setDescricaoProjeto(item.descricaoProjeto)
    setTecnologias(item.tecnologias)
    setDescricaoVaga(item.descricaoVaga)
    setRepositorio(item.repositorio)
    setEmailUsuario(item.emailUsuario)
    setAutorProjeto(item.autorProjeto)
    setParticipantesProjeto(item.participantesProjeto)
    }
  }, [item])

  //const handleExcluir = () => {
    //deleteGasto(res.id).then(res=>{navigation.goBack();});
  //};

  return (
    <Container>
      <ScrollView>
        <Logo/>
        <TextTitle title={nomeProjeto}/>
        <Body>
          <View>
            <Card>
              <Text1 title="Descrição do projeto:"/>
              <Text1 name={descricaoProjeto}/>
            </Card>
          </View>
          <View>
            <Card>
              <Text1 title="Descrição da vaga:"/>
              <Text1 name={descricaoVaga}/>
            </Card>
          </View>
          <View>
            <Card>
              <Text1 title="Tecnologias utilizadas:"/>
              <Text1 name={tecnologias}/>
            </Card>
          </View>
          <View>
            <Card>
              <Text1 title="Autor do projeto: " name={autorProjeto}/>
              <Text1 title="Email do usuário: " name={emailUsuario}/>
              <Text1 title="Repositório: " name={repositorio}/>
            </Card>
          </View>
          <Union>
            <SmallCard>
              <SmallText title="Precisa de ajuda?"/>
              <Button1 onPress={() => console.log('Solicitar tutor')} title="Solicitar Tutor"/>
            </SmallCard>
            <SmallCard>
              <SmallText name={participantesProjeto}/>
            </SmallCard>
          </Union>
          <Button1 onPress={() => console.log('Sair do projeto')} title="Sair do Projeto"/> 
          <Button1 onPress={() => navigation.goBack()} title="Voltar"/>
        </Body>
      </ScrollView>
    </Container>
  );
};

export default RealizacaoProjeto;
