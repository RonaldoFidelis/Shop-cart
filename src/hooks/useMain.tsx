import { useContext, useState } from "react";
import { FormatSize } from "../interface/formatSize";
import { ShopCart } from "../class/ShopCart";
import { ChooseSize } from "../class/ChooseSize";
import { Checkout } from "../class/Checkout";
import { CartContext } from "../context/CartContext";
import { Favorite } from "../class/Favorite";

export function useMain() {
  const { cart, setCart, favorite, setFavorite} = useContext(CartContext);
  const [size, setSize] = useState<FormatSize[]>([]);

  const chooseSize = new ChooseSize(size, setSize);
  const shopCart = new ShopCart(cart, setCart, chooseSize);
  const checkout = new Checkout(shopCart);
  const favorites = new Favorite(favorite, setFavorite);

  return {cart, setCart, shopCart, chooseSize, checkout, favorites}
}
