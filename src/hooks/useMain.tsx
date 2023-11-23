import { useContext, useState } from "react";
import { FormatSize } from "../interface/formatSize";
import { ShopCart } from "../class/ShopCart";
import { ChooseSize } from "../class/ChooseSize";
import { Checkout } from "../class/Checkout";
import { CartContext } from "../context/CartContext";

export function useMain() {
  const { cart, setCart } = useContext(CartContext);
  const [size, setSize] = useState<FormatSize[]>([]);

  const chooseSize = new ChooseSize(size, setSize);
  const shopCart = new ShopCart(cart, setCart, chooseSize);
  const checkout = new Checkout(shopCart);

  return {cart, setCart, shopCart, chooseSize, checkout}
}
