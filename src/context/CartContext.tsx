import React, { createContext, useState } from "react";

type Sneaker = {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
  quatity?:number;
}

export const CartContext = createContext({});

export const CartContextProvider = ({ children } : {children: React.ReactNode}) => {
  const [cart, setCart] = useState<Sneaker[] | undefined>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
