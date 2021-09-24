import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import { Container } from './style';

export const Buyurtmalar = ({ location }) => {
  return (
    <Container>
      <Navbar />
      <Body />
    </Container>
  );
};

export default Buyurtmalar;
