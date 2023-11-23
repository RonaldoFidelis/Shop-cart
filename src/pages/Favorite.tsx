import { FavoriteEmpty } from "../components/FavoriteEmpty";
import { FavoriteNotEmpty } from "../components/FavoriteNotEmpty";
import { useMain } from "../hooks/useMain";

export function Favorite() {
  const {favorites} = useMain();

  return (
    <div className="w-full min-h-screen">
      {favorites.isEmpty() ? (
        <FavoriteEmpty/>
      ):(
        <FavoriteNotEmpty/>
      )}
    </div>
  )
}
