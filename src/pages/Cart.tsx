import { CartEmpty } from "../components/CartEmpty";
import { CartNotEmpty } from "../components/CartNotEmpty";
import { useMain } from "../hooks/useMain";

export function Cart() {
  const {shopCart} = useMain();
  return (
    <div className="w-full min-h-screen">
      {shopCart.isEmpty() ? (
        <CartEmpty/>
      ):(
        <CartNotEmpty/>
      )}
    </div>
  )
}
