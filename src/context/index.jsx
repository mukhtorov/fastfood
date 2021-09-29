import React, { createContext } from 'react';
import { Buyurtmalar } from './Buyurtmalar/buyurtmalar';
// const MainContext = createContext()

export const MainContext = ({ children }) => {
  return (
    <div>
      <Buyurtmalar>{children}</Buyurtmalar>
    </div>
  );
};
