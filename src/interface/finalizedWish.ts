import { Cart } from "./cart";
import { Sneaker } from "./sneaker";

export interface FinalizedWish {
  shopCart: Cart;
  decreaseQuantity(sneaker: Sneaker): void;
  incrementQuantity(sneaker: Sneaker): void;
}
