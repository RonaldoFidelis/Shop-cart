import { ChooseSize } from "../class/ChooseSize";
import { Sneaker } from "./sneaker";

export interface Cart {
  cart: Sneaker[];
  setCart: React.Dispatch<React.SetStateAction<Sneaker[]>>;
  size: ChooseSize;
  addToCart(sneaker: Sneaker): void;
  removeFromCart(sneaker: Sneaker): void;
  isEmpty(): boolean;
  amount(): number;
}


