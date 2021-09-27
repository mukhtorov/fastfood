import React from 'react';
import { Container, Wrapper } from './style';
import ProductCard from '../../ProductCard';
import { card } from '../../../mock/card';

export const Body = () => {
  return (
    <Container>
      <Wrapper>
        {card.yangi.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.qabul.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.jonatilgan.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.yopilgan.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Body;
