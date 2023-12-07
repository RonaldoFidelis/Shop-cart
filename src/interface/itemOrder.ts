export interface ItemOrder {
  id:string
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
