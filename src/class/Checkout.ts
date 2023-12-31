import { Cart } from "../interface/cart";
import { InterfaceCheckout } from "../interface/checkout";
import { ItemOrder } from "../interface/itemOrder";
import { InterfaceOrder } from "../interface/order";
import { Sneaker } from "../interface/sneaker";
import { Redirector } from "./Redirector";
import { v4 as uuidv4 } from 'uuid';

export class Checkout implements InterfaceCheckout{
  shopCart: Cart;
  order: InterfaceOrder;
  redirector: Redirector;

  constructor(shopCart: Cart, order: InterfaceOrder, redirector: Redirector) {
    this.shopCart = shopCart;
    this.order = order;
    this.redirector = redirector;
  }

  finalizeWish(sneaker: Sneaker[] ,total: number): void {
    const newOrder: ItemOrder = {
      id:uuidv4(),
      item: sneaker.map((sneaker) => ({
        ...sneaker,
      })),
      total: total,
    };
    console.log('Nova ordem:',newOrder);
    this.order.receivedOrder(newOrder);
    this.shopCart.clearCart();
    this.redirector.navigateToOrder();
  }
}
