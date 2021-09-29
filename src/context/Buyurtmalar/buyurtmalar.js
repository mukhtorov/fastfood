import React, { createContext, useContext, useReducer } from 'react';
import { card } from '../../mock/card';
import { reducer } from './reducer';

export const BuyurtmalarContext = createContext();
export const BuyurtmaContext = () => useContext(BuyurtmalarContext);

export const Buyurtmalar = ({ children }) => {
  return (
    <BuyurtmalarContext.Provider value={useReducer(reducer, card)}>
      {children}
    </BuyurtmalarContext.Provider>
  );
};
