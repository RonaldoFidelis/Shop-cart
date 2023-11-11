import React, { createContext, useState, ReactNode } from "react";

type FormatData = {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
  quantity?: number;
}

type CartContextType = {
  cart: FormatData[];
  setCart: React.Dispatch<React.SetStateAction<FormatData[]>>;
  favorite: FormatData[];
  setFavorite: React.Dispatch<React.SetStateAction<FormatData[]>>;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<FormatData[]>([]);
  const [favorite, setFavorite] = useState<FormatData[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart, favorite, setFavorite }}>
      {children}
    </CartContext.Provider>
  );
};
