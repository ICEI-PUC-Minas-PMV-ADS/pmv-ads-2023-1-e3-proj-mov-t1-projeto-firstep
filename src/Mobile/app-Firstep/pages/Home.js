import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import CadastroProjeto from './CadastroProjeto';
import Inscrever from './Inscrever';
import RealizacaoProjeto from './RealizacaoProjeto';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'realizacaoProjeto', title: 'Projetos', icon: 'heart'},
    { key: 'inscrever', title: 'Inscrever', icon: 'album' },
    { key: 'cadastroProjeto', title: 'Criar Projeto', icon: 'form-select' },
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    realizacaoProjeto: RealizacaoProjeto,
    inscrever: Inscrever,
    cadastroProjeto: CadastroProjeto,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor:'#ffdd57'}}
    />
  );
};

export default Home;