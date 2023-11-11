import { useContext } from "react";
import { FavoriteEmpty } from "../components/FavoriteEmpty";
import { FavoriteNotEmpty } from "../components/FavoriteNotEmpty";
import { CartContext } from "../context/CartContext";

export function Favorite() {
  const {favorite} = useContext(CartContext);

  return (
    <div className="w-full min-h-screen">
      {favorite.length === 0 ? (
        <FavoriteEmpty/>
      ):(
        <FavoriteNotEmpty/>
      )}
    </div>
  )
}
