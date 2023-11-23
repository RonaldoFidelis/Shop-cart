import { Cart } from "./cart";
import { Sneaker } from "./sneaker";

export interface FinalizeWish {
  shopCart: Cart;
  decreaseQuantity(sneaker: Sneaker): void;
  incrementQuantity(sneaker: Sneaker): void;
  finalizeWish(): void;
}
