import React, { useState } from 'react';
import { Container, Wrapper } from './style';
import ProductCard from '../../ProductCard';

export const Body = () => {
  return (
    <Container>
      <Wrapper>
        <ProductCard />
      </Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Body;
