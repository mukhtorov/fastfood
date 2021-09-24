import React, { useState } from 'react';
import { Container, IconWrapper, Info, Timer, Wrapper } from './style';

export const ProductCard = () => {
  return (
    <Container>
      <Wrapper>
        <Info.OrderID>12345</Info.OrderID>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <Timer>
          <Info.Clock />
          <Info.Text>00:22</Info.Text>
        </Timer>
      </Wrapper>
      <Wrapper flex>
        <Info>
          <Info.User />
          <div>
            <Info.Name>Sardorbek Mukhtorov</Info.Name>
            <Info.Nuber>+998 (99) 123 45 67</Info.Nuber>
          </div>
        </Info>
        <Info>
          <div>
            <Info.Total>Umumiy Summa</Info.Total>
            <Info.Price>40,000 UZS</Info.Price>
          </div>
          <Info end>
            <Info.PaymeIcon />
            <Info.Payme>Payme</Info.Payme>
          </Info>
        </Info>
      </Wrapper>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default ProductCard;
