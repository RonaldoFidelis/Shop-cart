import React, { createContext, useState, ReactNode } from "react";

type FormatCart = {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
  quantity: number;
}

type FormatFavorite = {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
  quantity?: number;
}

type CartContextType = {
  cart: FormatCart[];
  setCart: React.Dispatch<React.SetStateAction<FormatCart[]>>;
  favorite: FormatFavorite[];
  setFavorite: React.Dispatch<React.SetStateAction<FormatFavorite[]>>;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<FormatCart[]>([]);
  const [favorite, setFavorite] = useState<FormatFavorite[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart, favorite, setFavorite }}>
      {children}
    </CartContext.Provider>
  );
};
