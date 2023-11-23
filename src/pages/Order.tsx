import { OrderEmpty } from "../components/OrderEmpty";
import { OrderNotEmpty } from "../components/OrderNotEmpty";
import { useMain } from "../hooks/useMain";

export function Order() {
  const {orders} = useMain();
  return (
    <div className="w-full min-h-screen">
      {orders.isEmpty() ? (
        <OrderEmpty/>
      ):(
        <OrderNotEmpty/>
      )}
    </div>
  )
}
