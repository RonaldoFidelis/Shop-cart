import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

type TypeSneaker = {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
  quantity: number;
}

export function CartNotEmpty() {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState<number | null>(null);

  const decreaseQuantity = (sneaker: TypeSneaker): void => {
    const newCart = cart.map((item) => {
      if(item.quantity == sneaker.size.length){
        return {...item};
      }

      if (item.id == sneaker.id) {
        return { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
      }

      return item;
    })
    setCart(newCart);
  }

  const incrementQuantity = (sneaker: TypeSneaker): void => {
    const newCart = cart.map((item) => {
      if (item.id == sneaker.id) {
        return { ...item, quantity: Math.max((item.quantity || 1) + 1, 0) }
      }
      return item;
    })
    setCart(newCart);
  }

  const deleteWish = (sneaker: TypeSneaker): void => {
    const newCart = cart.filter((item) => item.id != sneaker.id)
    setCart(newCart);
  }

  useEffect(() => {
    const total = (): void => {
      const temp = cart.reduce((ac, item) => ac += (item.price * item.quantity), 0);
      setTotal(temp);
    }
    total();
  }, [cart])

  return (
    <div className="w-full min-h-screen pt-20">
      <div className="md:grid md:grid-cols-3 p-5 gap-1">
        <div className="col-span-2 flex flex-col gap-5 items-center">
          {cart.map((sneaker, key) => (
            <div
              className="flex items-center gap-2 w-full border-b-2 py-2"
              key={key}>
              <div className='flex max-w-[140px] max-h-[140px] items-center justify-center overflow-hidden bg-black rounded-lg p-2'>
                <img className='w-[100%]' src={sneaker.img} alt={sneaker.name} />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="md:text-lg font-medium flex items-center">{sneaker.name}</h1>
                <span>Size:{sneaker.size.map((size, key) => (
                  <button
                    key={key}
                    className="p-1 rounded-md bg-slate-200 hover:bg-slate-300 duration-500 mx-1 text-sm font-light">{size}</button>
                ))}
                </span>
                <div className="mt-5 flex gap-5">
                  <h1 className="md:text-[18px] font-medium">$ {sneaker.price}</h1>
                  <div className="grid grid-cols-3 items-center justify-center ">
                    <button
                      onClick={() => decreaseQuantity(sneaker)}
                      className="col-span-1 flex items-center justify-center hover:bg-slate-300 duration-500 px-2 rounded-l-full">
                      <i className="text-sm fa-solid fa-minus"></i>
                    </button>
                    <h1 className="col-span-1 text-sm flex items-center justify-center">{sneaker.quantity > sneaker.size.length ? sneaker.quantity : sneaker.size.length}</h1>
                    <button
                      onClick={() => incrementQuantity(sneaker)}
                      className="col-span-1 flex items-center justify-center hover:bg-slate-300 duration-500 px-2 rounded-r-full">
                      <i className="text-sm fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => deleteWish(sneaker)}
                className="flex items-center mx-5">
                <i className=" block text-lg hover:text-[#F30000] duration-500 fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
        <div className="col-span-1 mx-1 flex flex-col items-center">
          <h1 className="flex items-center text-lg font-medium w-full h-10 bg-black text-white px-2">Resume</h1>
          <ul className="w-full py-2">
            <li className="flex items-center justify-between px-2">
              <span className="">Subtotal</span>
              <span className="">${total?.toFixed(2)}</span>
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Freight</span>
              <span>Free</span>
            </li>
            <li className="flex items-center justify-between px-2">
              <span>Coupon</span>
              <span>No coupon</span>
            </li>
          </ul>
          <span className="w-full h-10 bg-black text-white flex items-center justify-between px-2">
            <h1 className="text-lg font-medium">Total</h1>
            <h1 className="text-lg font-medium">${total?.toFixed(2)}</h1>
          </span>
          <button className="mt-5 w-full bg-black text-white py-2 font-medium text-lg hover:bg-[#F30000] duration-500">Checkout</button>
        </div>
      </div>
    </div>
  )
}
