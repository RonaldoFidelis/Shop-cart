import { Sneaker } from "./sneaker";

export interface Favorites {
  favorite: Sneaker[];
  setFavorite: React.Dispatch<React.SetStateAction<Sneaker[]>>;
  addedToFavorite(sneaker: Sneaker): void;
  removeFromFavorite(sneaker: Sneaker): void;
  isEmpty(): boolean;
}
