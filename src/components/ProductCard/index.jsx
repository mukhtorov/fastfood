import React, { useState } from 'react';
import Done from '../Generic/Done';
import Cancel from '../Generic/Cancel';
import { Container, Footer, IconWrapper, Info, Timer, Wrapper } from './style';

export const ProductCard = ({ value }) => {
  console.log(value.time.getHours());
  return (
    <Container>
      <Wrapper>
        <Info.OrderID>{value.orderId}</Info.OrderID>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <Timer>
          <Info.Clock />
          <Info.Text>{`${value.time.getHours()}: ${value.time.getMinutes()}`}</Info.Text>
        </Timer>
      </Wrapper>
      <Wrapper flex>
        <Info>
          <Info.User />
          <div>
            <Info.Name>{value.user.name}</Info.Name>
            <Info.Nuber>{value.user.phone}</Info.Nuber>
          </div>
        </Info>
        <Info center>
          <div>
            <Info.Total top>Umumiy Summa</Info.Total>
            <Info.Price>{value.total} UZS</Info.Price>
          </div>
          <Info end={'true'}>
            <Info.PaymeIcon />
            <Info.Payme>Payme</Info.Payme>
          </Info>
        </Info>
      </Wrapper>
      <Wrapper flex last>
        <Footer>
          <div>
            <Info.Total>Operator</Info.Total>
            <Info.Name>{value.operator.name}</Info.Name>
          </div>
          <Cancel />
        </Footer>
        <Footer>
          <div>
            <Info.Total>Filiall</Info.Total>
            <Info.Name>
              {value.filial.title} <br /> {value.filial.location}
            </Info.Name>
          </div>
          <Done />
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default ProductCard;
