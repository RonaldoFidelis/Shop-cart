import React, { createContext, useState, ReactNode } from "react";

type Sneaker = {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
  quantity?: number;
}

type CartContextType = {
  cart: Sneaker[];
  setCart: React.Dispatch<React.SetStateAction<Sneaker[]>>;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Sneaker[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
