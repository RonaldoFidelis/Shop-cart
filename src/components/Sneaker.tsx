import { products } from "../data/Products"
import { useMain } from "../hooks/useMain"
import '../style/SneakerComponents.css'

export function Sneaker() {
  const {shopCart, chooseSize, favorites} = useMain()

  return (
    <section className="w-full flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-semibold mb-5">Sneaker's</h1>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {products.map((sneaker, id) => (
          <div
            id={sneaker.id}
            key={id}
            className=" relative flex flex-col items-center justify-center bg-[#FFFFFF] w-[200px] h-[300px] rounded-3xl gap-2 shadow-lg">
            <button
              onClick={() => favorites.addedToFavorite(sneaker)}
              className="absolute flex items-center justify-center cursor-pointer top-[10px] right-4"
            >
              <i className="block hover:bg-[#F30000] p-1 rounded-full duration-500 text-[17px] fa-regular fa-heart"></i>
            </button>
            <div className='flex max-w-[140px] max-h-[140px] items-center justify-center overflow-hidden bg-black rounded-full p-2'>
              <img className='w-[100%]' src={sneaker.img} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
              <h1 className='text-base font-medium'>{sneaker.name}</h1>
              <ul className="flex flex-row gap-2">
                <li className="flex gap-2">
                  {sneaker.size.map((size, id) => (
                    <label
                      className="relative flex items-center justify-center"
                      key={id}>
                      <input
                        type="checkbox"
                        name={`optionsSizer_${sneaker.id}`}
                        onClick={() => chooseSize.chooseSize(sneaker.id, size)}
                        className="radio-size absolute w-[31px] h-[31px] cursor-pointer z-20 opacity-0"
                      />
                      <span className='select-size min-w-[30px] flex items-center justify-center'>{size}</span>
                    </label>
                  ))}
                </li>
              </ul>
              <h3 className='text-base font-medium'>$ {sneaker.price}</h3>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <button
                className="flex items-center justify-center cursor-pointer"
                onClick={() => shopCart.addToCart(sneaker)}>
                <p
                  className="text-[15px] font-medium block bg-slate-200 px-2 py-1 rounded-md hover:bg-slate-300 duration-500">Add to cart</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
