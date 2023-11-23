import React, { createContext, useState, ReactNode } from "react";
import { CartItem } from "../interface/cartItem";
import { FavoriteItem } from "../interface/favoriteItem";

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  favorite: FavoriteItem[];
  setFavorite: React.Dispatch<React.SetStateAction<FavoriteItem[]>>;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorite, setFavorite] = useState<FavoriteItem[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart, favorite, setFavorite }}>
      {children}
    </CartContext.Provider>
  );
};
