import { Dispatch, SetStateAction } from "react";
import { Favorites } from "../interface/favorites";
import { Sneaker } from "../interface/sneaker";

export class Favorite implements Favorites {
  favorite: Sneaker[];
  setFavorite: Dispatch<SetStateAction<Sneaker[]>>;

  constructor(favorite: Sneaker[], setFavorite:Dispatch<SetStateAction<Sneaker[]>>) {
    this.favorite = favorite;
    this.setFavorite = setFavorite;
  }

  addedToFavorite = (sneaker: Sneaker): void => {
    const index = this.favorite.findIndex((id) => id.id === sneaker.id);

    if (index !== -1) {
      console.log('Item já está nos favoritos');
      return
    } else {
      const newFavorite = { ...sneaker }
      this.setFavorite((previusFavorites) => [...previusFavorites, newFavorite]);
    }
  }

  removeFromFavorite(sneaker: Sneaker): void {
    const favorite = this.favorite.filter((item) => item.id != sneaker.id);
    this.setFavorite(favorite);
  }

  isEmpty(): boolean {
    return this.favorite.length == 0 ? true : false;
  }
}
