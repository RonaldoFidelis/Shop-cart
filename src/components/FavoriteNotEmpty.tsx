import { useCart } from "../hooks/useCart"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function FavoriteNotEmpty() {
  const { favorite } = useContext(CartContext);
  const { addedToCart, chooseSize, deleteWish } = useCart()

  const handleSubmit = (): void => { }

  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-5 px-5">
      <h1 className="mt-20 text-2xl font-medium">Your Favorites</h1>
      <form
        onSubmit={() => handleSubmit()}
        className="w-full flex flex-row items-center justify-center gap-2">
        <input
          placeholder="Search your sneaker favorite..."
          className="bg-slate-200 w-[70%] h-[40px] rounded-md px-2"
          type="text" />
        <button
          className="flex items-center justify-center bg-slate-300 w-[40px] h-[40px] rounded-md hover:bg-slate-400 duration-500">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-10">
        {favorite.map((sneaker) => (
          <div
            className="flex flex-row items-center justify-between shadow-lg p-4 gap-2 min-w-[350px] max-w-[350px]"
            key={sneaker.id}>
            <div className="flex items-center justify-center max-w-[140px] max-h-[140px] bg-black p-2 rounded-lg">
              <img
                className="w-[100%]"
                src={sneaker.img} alt={sneaker.name} />
            </div>
            <div className="flex flex-col justify-between h-[140px]">
              <div>
                <h1 className="text-lg font-medium">{sneaker.name}</h1>
                <h3 className="text-sm font-light">{sneaker.color}</h3>
                <ul className="mt-2 flex items-center gap-2">
                  <li className="flex gap-2">
                    {sneaker.size.map((size, id) => (
                      <label
                        className="relative flex items-center justify-center"
                        key={id}>
                        <input
                          type="checkbox"
                          name={`optionsSizer_${sneaker.id}`}
                          onClick={() => chooseSize(sneaker.id, size)}
                          className="radio-size absolute w-[31px] h-[31px] cursor-pointer z-20 opacity-0"
                        />
                        <span className='select-size min-w-[30px] flex items-center justify-center'>{size}</span>
                      </label>
                    ))}
                  </li>

                </ul>
              </div>
              <h3 className="text-base font-medium mb-2">$ {sneaker.price}</h3>
            </div>
            <div className="flex flex-col items-center justify-between h-[140px]">
              <i className="text-[#f30000] text-[20px] fa-solid fa-heart py-[5.5px]"></i>
              <div className="flex flex-col items-center justify-center gap-2 mb-3">
                <button
                  onClick={() => deleteWish(sneaker)}
                  className="flex items-center justify-center">
                  <i className="block hover:text-[#f30000] duration-500 fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => addedToCart(sneaker)}
                  className="flex items-center justify-center">
                  <i className="block hover:text-[#008EF1] duration-500 fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
