import React from 'react';
import logo from 'logo.svg';
import Styled, { keyframes } from 'styled-components';

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = Styled.img`
  animation: ${logoSpin} infinite 20s linear;
  ${props => props.backwards && 'animation-direction: reverse;'}
  height: 80px;
`;

const AppHeader = Styled.header`
  height: 150px;
  padding: 20px;
  background-color: ${props => props.theme.bg || '#222'};
  color: ${props => props.theme.fg || 'white'};
  > h1 {
    font-size: 1.5em;
    color: ${props => props.theme.fg || 'white'};
  }
`;

export default props => (
  <AppHeader>
    <Logo src={logo} className="App-logo" alt="logo" />
    <h1>Hello react!</h1>
  </AppHeader>
);
