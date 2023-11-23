import { Dispatch, SetStateAction } from "react";
import { ItemOrder } from "../interface/itemOrder";
import { InterfaceOrder } from "../interface/order";

export class Order implements InterfaceOrder{
  order: ItemOrder;
  setOrder: Dispatch<SetStateAction<ItemOrder>>;

  constructor(order: ItemOrder, setOrder: Dispatch<SetStateAction<ItemOrder>>) {
    this.order = order;
    this.setOrder = setOrder;
  }
  isEmpty(): boolean {
    return this.order.item.length == 0 ? true : false;
  }

  receivedOrder(): void {
    throw new Error("Method not implemented.");
  }

  cancelOrder(order: ItemOrder): void {
    throw new Error("Method not implemented.");
  }
  editOrder(order: ItemOrder): void {
    throw new Error("Method not implemented.");
  }

}
