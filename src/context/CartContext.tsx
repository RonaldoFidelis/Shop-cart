import React, { createContext, useState, ReactNode } from "react";
import { Sneaker } from "../interface/sneaker";

type CartContextType = {
  cart: Sneaker[];
  setCart: React.Dispatch<React.SetStateAction<Sneaker[]>>;
  favorite: Sneaker[];
  setFavorite: React.Dispatch<React.SetStateAction<Sneaker[]>>;
  order: Sneaker[];
  setOrder: React.Dispatch<React.SetStateAction<Sneaker[]>>;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Sneaker[]>([]);
  const [favorite, setFavorite] = useState<Sneaker[]>([]);
  const [order, setOrder] = useState<Sneaker[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart, favorite, setFavorite, order, setOrder }}>
      {children}
    </CartContext.Provider>
  );
};
