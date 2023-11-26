import { Cart } from "../interface/cart";
import { Sneaker } from "../interface/sneaker";
import { ChooseSize } from "./ChooseSize";
import { Redirector } from "./Redirector";

export class ShopCart implements Cart{
  cart: Sneaker[];
  setCart: React.Dispatch<React.SetStateAction<Sneaker[]>>;
  size: ChooseSize;
  redirector: Redirector;

  constructor(cart: Sneaker[], setCar: React.Dispatch<React.SetStateAction<Sneaker[]>>, size: ChooseSize, redirector: Redirector) {
    this.cart = cart;
    this.setCart = setCar;
    this.size = size;
    this.redirector = redirector;
  }

  addToCart(sneaker: Sneaker): void {
    if(this.size.size.length == 0){
      window.alert("Selecione um tamanho.")
      return;
    }

    const validSizes = this.size.size.find((s) => s.id === sneaker.id)?.size || [];
    if (validSizes.length === 0) {
      window.alert("Por favor, selecione um tamanho válido para este item.");
      return;
    }

    const index = this.cart.findIndex((item) => item.id === sneaker.id);

    if (index !== -1) {
      const existingSizes = this.cart[index].size || [];
      const newSize = validSizes.filter((size) => !existingSizes.includes(size));

      if (newSize.length > 0) {
        const updatedCart = [...this.cart];
        updatedCart[index].quantity = (updatedCart[index].quantity || 0) + validSizes.length;
        updatedCart[index].size = existingSizes.concat(newSize);
        this.setCart(updatedCart);
        this.redirector.navigateToCart();
      } else {
        window.alert("Você já adicionou o sneaker ao carrinho.");
      }
    } else {
      const newItem = { ...sneaker, quantity: validSizes.length, size: validSizes };
      this.setCart((prevCart) => [...prevCart, newItem]);
      this.redirector.navigateToCart();
    }
    console.log(this.cart);
    this.size.clearSize(sneaker.id);
  }

  removeFromCart(sneaker: Sneaker): void {
    const cart = this.cart.filter((item) => item.id !== sneaker.id);
    this.setCart(cart);
  }

  decreaseQuantity(sneaker: Sneaker): void {
    const newCart = this.cart.map((item) => {
      if(item.quantity == sneaker.size.length){
        return {...item};
      }

      if (item.id == sneaker.id) {
        return { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
      }

      return item;
    })
    this.setCart(newCart);
  }

  incrementQuantity(sneaker: Sneaker): void {
    const newCart = this.cart.map((item) => {
      if (item.id == sneaker.id) {
        return { ...item, quantity: Math.max((item.quantity || 1) + 1, 0) }
      }
      return item;
    })
    this.setCart(newCart);
  }

  isEmpty(): boolean {
    return this.cart.length === 0 ? true : false;
  }

  amount(): number {
    return this.cart.reduce((ac, item) => ac + item.price, 0);
  }

  clearCart(): void {
    this.setCart([]);
  }
}
