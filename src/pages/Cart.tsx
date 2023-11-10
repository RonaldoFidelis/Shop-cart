import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartEmpty } from "../components/CartEmpty";
import { CartNotEmpty } from "../components/CartNotEmpty";

export function Cart() {
  const {cart} = useContext(CartContext);

  return (
    <div className="w-full min-h-screen py-20">
      {cart.length === 0 ? (
        <CartEmpty/>
      ):(
        <CartNotEmpty/>
      )}
    </div>
  )
}
