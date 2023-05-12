import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './contexts/UserContext';
import Route from './navigation/Route';

const App = () => {
  return (
    <UserProvider>
    <NavigationContainer>
      <Route />
    </NavigationContainer>
    </UserProvider>
  );
};

export default App;
