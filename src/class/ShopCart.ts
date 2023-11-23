import { Cart } from "../interface/cart";
import { Sneaker } from "../interface/sneaker";
import { ChooseSize } from "./ChooseSize";

export class ShopCart implements Cart{
  cart: Sneaker[];
  setCart: React.Dispatch<React.SetStateAction<Sneaker[]>>;
  size: ChooseSize;

  constructor(cart: Sneaker[], setCar: React.Dispatch<React.SetStateAction<Sneaker[]>>, size: ChooseSize) {
    this.cart = cart;
    this.setCart = setCar;
    this.size = size;
  }

  addToCart(sneaker: Sneaker): void {
    if(this.size.size.length == 0){
      console.error("Por favor, selecione pelo menos um tamanho antes de adicionar ao carrinho.");
      return;
    }

    const validSizes = this.size.size.find((s) => s.id === sneaker.id)?.size || [];
    if (validSizes.length === 0) {
      console.error("Por favor, selecione um tamanho válido para este item.");
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
      } else {
        console.error("Você já adicionou este item ao carrinho com os tamanhos selecionados.");
      }
    } else {
      const newItem = { ...sneaker, quantity: validSizes.length, size: validSizes };
      this.setCart((prevCart) => [...prevCart, newItem]);
    }
    console.log(this.cart);
    this.size.clearSize();
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
