import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import CadastroProjeto from '../pages/CadastroProjeto';

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
    
    </Stack.Navigator>
  );
};

export default Main;