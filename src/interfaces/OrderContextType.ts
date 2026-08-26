import type { DishInterface } from "./DishInterface";
import type { OrderInterface } from "./OrderInterface";

export interface OrderContextType {
  orderList: OrderInterface[];
  addToOrder: (dish: DishInterface) => void;
  removeFromOrder: (dish: DishInterface) => void;
  plusQuantity: (dish: DishInterface) => void;
  minusQuantity: (dish: DishInterface) => void;
  clearOrder: () => void;
  totalPrice: number;
}