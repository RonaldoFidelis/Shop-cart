import { products } from "../data/Products"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import '../style/SneakerComponents.css'

type FormatSneaker = {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
  quantity?: number;
}

type FormatSize = {
  id: string;
  size: number[]
}

export function Sneaker() {
  const { cart, setCart } = useContext(CartContext);
  const [size, setSize] = useState<FormatSize[]>([])

  const chooseSize = (id: string, valueSize: number): void => {
    const index = size.findIndex((item) => item.id === id);

    if (index !== -1) { // se retorna  alguma coisa diferente de -1 é verdadeiro
      const updateSize = [...size];
      const currentSize = updateSize[index];

      if (!currentSize.size.includes(valueSize)) {
        currentSize.size.push(valueSize);
      }

      setSize(updateSize);
    } else {
      setSize((previusValue) => [...previusValue, { id: id, size: [valueSize] }])
    }
  };

  const addedToCart = (item: FormatSneaker): void => {
    // Verifica se pelo menos um tamanho foi selecionado, independente do item, só está verificandp que o usuario selecionou algum tamanho
    if (size.length === 0) {
      console.error("Por favor, selecione pelo menos um tamanho antes de adicionar ao carrinho.");
      return;
    }

    // Verificando se o id do tamanho selecionado bate com o id do item que estamos tentando adicionar ao carrinho, caso ele não encontre, usei o ?. (Optional Chaining), para retorna um array vazio caso a condição não seja atendida.
    const validSizes = size.find((s) => s.id === item.id)?.size || [];
    if (validSizes.length === 0) { // Se a condição for atendida, o tamanho do sneaker que estamos tentando adicionar ao carrinho não foi selecionado
      console.error("Por favor, selecione um tamanho válido para este item.");
      return;
    }

    // Verificando se o item está no carrinho de compra
    const index = cart.findIndex((sneaker) => sneaker.id === item.id);

    if (index !== -1) {// Se o item já estiver no carrinho, verifica se o tamanho selecionado é diferente
      const existingSizes = cart[index].size || [];
      const newSize = validSizes.filter((size) => !existingSizes.includes(size));

      if (newSize.length > 0) {
        // Se o tamanho for diferente, adiciona o novo tamanho ao item do carrinho
        const updatedCart = [...cart];
        /**(updatedCart[index].quantity || 0): Usa o operador de coalescência nula (||) para fornecer um valor padrão caso updatedCart[index].quantity seja null ou undefined. Se updatedCart[index].quantity existir, ela manterá o seu valor; caso contrário, será substituído por 0 */
        updatedCart[index].quantity = (updatedCart[index].quantity || 0) + validSizes.length;
        updatedCart[index].size = existingSizes.concat(newSize);
        setCart(updatedCart);
      } else {
        console.error("Você já adicionou este item ao carrinho com os tamanhos selecionados.");
      }
    } else {
      // Se o item não estiver no carrinho, adicione-o ao carrinho com os tamanhos selecionados
      const newItem = { ...item, quantity: validSizes.length, size: validSizes };
      setCart((prevCart) => [...prevCart, newItem]);
    }
    // Limpando os tamanhos selecionados após adicionar o item ao carrinho
    setSize([]);
  };

  console.log(cart);
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
            >
              <i className=" block hover:bg-[#F30000] p-1 rounded-full duration-500 text-[17px] fa-regular fa-heart"></i>
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
                        onClick={() => chooseSize(sneaker.id, size)}
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
