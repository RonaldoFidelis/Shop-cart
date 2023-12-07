import { Dispatch, SetStateAction } from "react";
import { ItemOrder } from "../interface/itemOrder";
import { InterfaceOrder } from "../interface/order";

export class Order implements InterfaceOrder {
  order: ItemOrder[];
  setOrder: Dispatch<SetStateAction<ItemOrder[]>>;

  constructor(order: ItemOrder[], setOrder: Dispatch<SetStateAction<ItemOrder[]>>) {
    this.order = order;
    this.setOrder = setOrder;
  }

  isEmpty(): boolean {
    return this.order.length === 0;
  }

  receivedOrder(newOrder: ItemOrder): void {
    this.setOrder((previous) => {
      const updatedOrder = Array.isArray(previous) ? [...previous, newOrder] : [newOrder];
      console.log(updatedOrder);
      return updatedOrder;
    });

  }

  cancelOrder(): void {
    console.log("Order canceled");
  }

  editOrder(): void {
    console.log("Order edited");
  }
}
