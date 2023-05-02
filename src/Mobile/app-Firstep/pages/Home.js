import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TelaPosLogin from './TelaPosLogin'
import RealizacaoProjeto from './RealizacaoProjeto';
import CadastroProjeto from  './CadastroProjeto';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#ffdd57' },
        }
      }
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
          
        />
      )}
    >
      <Tab.Screen
        name="TelaPosLogin"
        component={TelaPosLogin}
        options={{
          tabBarLabel: 'Pos-Login',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="RealizacaoProjeto"
        component={RealizacaoProjeto}
        options={{
          tabBarLabel: 'Projeto',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="application" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="CadastroProjeto"
        component={CadastroProjeto}
        options={{
          tabBarLabel: 'Criar Projeto',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="form-select" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
