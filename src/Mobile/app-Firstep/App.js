import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import CadastroProjeto from './pages/CadastroProjeto';
import Login from './pages/Login';
import Inscrever from './pages/Inscrever';
import CadastroUsuario from './pages/CadastroUsuario';
import RealizacaoProjeto from './pages/RealizacaoProjeto';
import Home from './pages/Home';
import TelaPosLogin from './pages/TelaPosLogin';


const App = () => {
  return (
    <NavigationContainer>       
        <Inscrever/>
    </NavigationContainer>
  );
};

export default App;
