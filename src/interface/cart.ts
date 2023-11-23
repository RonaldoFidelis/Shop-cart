import { ChooseSize } from "../class/ChooseSize";
import { CartItem } from "./cartItem";
import { Sneaker } from "./sneaker";

export interface Cart {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  size: ChooseSize;
  addToCart(sneaker: Sneaker): void;
  removeFromCart(sneaker: Sneaker): void;
  isEmpty(): boolean;
  amount(): number;
}


