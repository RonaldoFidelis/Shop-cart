import { Cart } from "./cart";
import { InterfaceOrder } from "./order";
import { Sneaker } from "./sneaker";

export interface InterfaceCheckout {
  shopCart: Cart;
  order: InterfaceOrder;
  finalizeWish(cart: Sneaker[] ,total: number): void;
}
