import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, goBack }) => {
  return (
    <Appbar.Header style={{backgroundColor: '#ffdd57'}}>
      {goBack && <Appbar.BackAction onPress={goBack} />}

      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;