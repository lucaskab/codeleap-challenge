import React from 'react';
import { HomeHeader, Title, LogoutButton } from './styles';

function Header({click}) {

  return (
      <HomeHeader>
        <Title>CodeLeap Network</Title>
        <LogoutButton onClick={click}>Logout</LogoutButton>
      </HomeHeader>
  );
}

export default Header;