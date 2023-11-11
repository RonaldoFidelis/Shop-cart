import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

type FormatSize = {
  id: string;
  size: number[]
}

type FormatSneaker = {
  img: string;
  name: string;
  color: string;
  price: number;
  size: number[];
  id: string;
  quantity?: number;
}

export function useCart() {

  const { cart, setCart, favorite, setFavorite } = useContext(CartContext);
  const [size, setSize] = useState<FormatSize[]>([]);

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

  const deleteWish = (sneaker: FormatSneaker): void => {
    const newCart = favorite.filter((item) => item.id != sneaker.id)
    setFavorite(newCart);
  }

  const addedToFavorite = (item: FormatSneaker): void => {
    // Verificando se o sneaker já está nos favoritos
    const index = favorite.findIndex((id) => id.id === item.id);

    if (index !== -1) { // Condição se caso o sneaker já esteja
      console.log('Item já está nos favoritos');
      return
    } else { // Condição se o sneaker não estiver;
      const newFavorite = { ...item }
      setFavorite((previusFavorites) => [...previusFavorites, newFavorite]);
    }
  }

  return { addedToCart, chooseSize, deleteWish, addedToFavorite }
}
