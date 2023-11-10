import { Link } from "react-router-dom";

export function CartEmpty() {

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <i className="text-[#F30000] text-7xl fa-solid fa-cart-shopping mb-5"></i>
      <h1 className="text-center text-lg font-normal text-[#F30000]">Your cart is empty</h1>
      <h2 className="text-center text-base font-normal">Add a product clicked at botton "add to cart" from home page.</h2>
      <Link
        className="flex items-center justify-center mt-5 px-5 py-2 border-2 border-[#F30000] text-center text-[#F30000] cursor-pointer"
        to='/'>Return from home page</Link>
    </div>
  )
}
