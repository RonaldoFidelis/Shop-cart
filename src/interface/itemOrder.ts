export interface ItemOrder {
  item: {
    img: string;
    name: string;
    color: string;
    price: number;
    size: number[];
    id: string;
    quantity: number;
  }[];
  total: number;
}
