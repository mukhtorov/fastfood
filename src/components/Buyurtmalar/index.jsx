import React, { useState } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import { Container } from './style';

export const Buyurtmalar = ({ location }) => {
  const [active, setActive] = useState(true);
  return (
    <Container>
      <Navbar onClick={(state) => setActive(state)} />
      <Body active={active} />
    </Container>
  );
};

export default Buyurtmalar;
