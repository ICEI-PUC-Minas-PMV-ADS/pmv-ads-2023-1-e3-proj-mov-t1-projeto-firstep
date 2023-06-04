import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import CadastroProjeto from '../pages/CadastroProjeto';
import Inscrever from '../pages/Inscrever';
import RealizacaoProjeto from '../pages/RealizacaoProjeto';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="CadastroProjeto"
        component={CadastroProjeto}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Inscrever"
        component={Inscrever}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="RealizacaoProjeto"
        component={RealizacaoProjeto}
        options={{
          header: () => null,
        }}
      />

    </Stack.Navigator>

  );
};

export default Main;