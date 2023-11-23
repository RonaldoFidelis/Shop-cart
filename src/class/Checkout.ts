import { Cart } from "../interface/cart";
import { InterfaceCheckout } from "../interface/checkout";
import { ItemOrder } from "../interface/itemOrder";
import { InterfaceOrder } from "../interface/order";
import { Sneaker } from "../interface/sneaker";

export class Checkout implements InterfaceCheckout{
  shopCart: Cart;
  order: InterfaceOrder;

  constructor(shopCart: Cart, order: InterfaceOrder) {
    this.shopCart = shopCart;
    this.order = order;
  }

  finalizeWish(sneaker: Sneaker[] ,total: number): void {
    const newOrder: ItemOrder = {
      item: sneaker.map((sneaker) => ({
        ...sneaker,
      })),
      total: total,
    };
    console.log('Nova ordem:',newOrder);
    console.log(sneaker);
    this.shopCart.clearCart();
  }
}
