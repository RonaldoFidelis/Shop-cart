import { useMain } from "../hooks/useMain"

export function OrderNotEmpty() {
  const {orders} = useMain();

  console.log(orders);

  return(
    <div>
      ORDEMS
    </div>
  )
}
