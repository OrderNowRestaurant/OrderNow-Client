import type { DishInterface } from "./DishInterface";
import type { OrderInterface } from "./OrderInterface";

export interface OrderContextType {
  orderList: OrderInterface[];
  addToOrder: (dish: DishInterface) => void;
  totalPrice: number;
}