import { useContext, useState } from "react";
import { FormatSize } from "../interface/formatSize";
import { ShopCart } from "../class/ShopCart";
import { ChooseSize } from "../class/ChooseSize";
import { Checkout } from "../class/Checkout";
import { CartContext } from "../context/CartContext";
import { Favorite } from "../class/Favorite";
import { Order } from "../class/Order";
import { Checkbox } from "../interface/checkbox";
import { Redirector } from "../class/Redirector";

export function useMain() {
  const { cart, setCart, favorite, setFavorite, order, setOrder} = useContext(CartContext);
  const [size, setSize] = useState<FormatSize[]>([]);
  const [checkbox, setCheckbox] = useState<Checkbox[]>([]);
  const redirector = new Redirector();

  const chooseSize = new ChooseSize(size, setSize, checkbox, setCheckbox);
  const shopCart = new ShopCart(cart, setCart, chooseSize, redirector);
  const orders = new Order(order, setOrder);
  const checkout = new Checkout(shopCart, orders);
  const favorites = new Favorite(favorite, setFavorite);

  return {cart, setCart, shopCart, chooseSize, checkout, favorites, orders, redirector}
}
