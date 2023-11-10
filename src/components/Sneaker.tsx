import { products } from "../data/Products"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

type Data = {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
  quantity?: number;
}

type Sized = {
  id: string;
  size: number[]
}

export function Sneaker() {
  const { cart, setCart } = useContext(CartContext);
  const [selectedSizes, setSelectedSizes] = useState<Sized[]>([]);

  const chooseSize = (productId: string, size: number): void => {
    const existingSizingIndex = selectedSizes.findIndex((item) => item.id === productId);

    if (existingSizingIndex !== -1) {
      // Produto encontrado na lista, então atualize o tamanho existente ou adicione se não existir
      const updatedSizings = [...selectedSizes];
      const existingSizing = updatedSizings[existingSizingIndex];

      // Verifica se o tamanho já existe na lista para este produto
      if (!existingSizing.size.includes(size)) {
        existingSizing.size.push(size);
      }

      setSelectedSizes(updatedSizings);
    } else {
      // Produto não encontrado na lista, adicione um novo item
      setSelectedSizes((prevSizes) => [...prevSizes, { id: productId, size: [size] }]);
    }

  };

  const addedToCart = (item: Data): void => {
    if (selectedSizes.length == 0) {
      const itemIndex = cart.findIndex((product: Data) => product.id === item.id);

      if (itemIndex !== -1) {
        const updatedCart = [...cart];
        if (typeof updatedCart !== 'undefined') {
          updatedCart[itemIndex].quantity += 1;
        }
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...item, quantity: 1 }]);
      }
    } else {
      const updatedCart = [...cart];

      selectedSizes.forEach((size) => {
        const newItem = { ...item, size: size.size };
        const itemIndex = updatedCart.findIndex(
          (product: Data) => product.id === item.id && product.size === size.size
        );

        if (itemIndex !== -1) {
          updatedCart[itemIndex].quantity += 1;
        } else {
          updatedCart.push({ ...newItem, quantity: 1 });
        }
      });

      setCart(updatedCart);
    }

    console.log(cart);
  };

  const addedToFavorite = (item: Data): void => {
    console.log(item);
  }



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
              className="absolute flex items-center justify-center cursor-pointer top-[10px] right-4"
              onClick={() => addedToFavorite(sneaker)}>
              <i className=" block hover:bg-[#F30000] p-1 rounded-full duration-500 text-[17px] fa-regular fa-heart"></i>
            </button>
            <div className='flex max-w-[140px] max-h-[140px] items-center justify-center overflow-hidden bg-black rounded-full p-2'>
              <img className='w-[100%]' src={sneaker.img} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
              <h1 className='text-base font-medium'>{sneaker.name}</h1>
              <ul className="flex flex-row gap-2">
                {sneaker.size.map((size, id) => (
                  <li
                    key={id}
                    onClick={() => chooseSize(sneaker.id, size)}
                    className="cursor-pointer p-1 rounded-md bg-slate-200 hover:bg-slate-300 duration-500">
                    <p className="text-sm font-medium">{size}</p>
                  </li>
                ))}
              </ul>
              <h3 className='text-base font-medium'>$ {sneaker.price}</h3>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <button
                className="flex items-center justify-center cursor-pointer"
                onClick={() => addedToCart(sneaker)}>
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
