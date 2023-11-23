import React, { SetStateAction } from "react";
import { ItemOrder } from "./itemOrder";

export interface InterfaceOrder{
  order: ItemOrder;
  setOrder: React.Dispatch<SetStateAction<ItemOrder>>;
  cancelOrder(order: ItemOrder): void;
  editOrder(order: ItemOrder): void;
  receivedOrder(): void;
  isEmpty(): boolean;
}
