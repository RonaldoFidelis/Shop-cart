import { ChooseSize } from "../class/ChooseSize";
import { Redirector } from "../class/Redirector";
import { Sneaker } from "./sneaker";

export interface Cart {
  cart: Sneaker[];
  setCart: React.Dispatch<React.SetStateAction<Sneaker[]>>;
  size: ChooseSize;
  redirector: Redirector;
  addToCart(sneaker: Sneaker): void;
  isEmpty(): boolean;
  removeFromCart(sneaker: Sneaker): void;
  decreaseQuantity(sneaker: Sneaker): void;
  incrementQuantity(sneaker: Sneaker): void;
  amount(): number;
  clearCart(): void;
}


