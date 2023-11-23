import { Cart } from "../interface/cart";
import { FinalizeWish } from "../interface/checkout";
import { Sneaker } from "../interface/sneaker";

export class Checkout implements FinalizeWish{
  shopCart: Cart;

  constructor(shopCart: Cart) {
    this.shopCart = shopCart;
  }

  decreaseQuantity(sneaker: Sneaker): void {
    const newCart = this.shopCart.cart.map((item) => {
      if(item.quantity == sneaker.size.length){
        return {...item};
      }

      if (item.id == sneaker.id) {
        return { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
      }

      return item;
    })
    this.shopCart.setCart(newCart);
  }

  incrementQuantity(sneaker: Sneaker): void {
    const newCart = this.shopCart.cart.map((item) => {
      if (item.id == sneaker.id) {
        return { ...item, quantity: Math.max((item.quantity || 1) + 1, 0) }
      }
      return item;
    })
    this.shopCart.setCart(newCart);
  }

  finalizeWish(): void {
    // enviar para order

    this.shopCart.clearCart();
  }
}
