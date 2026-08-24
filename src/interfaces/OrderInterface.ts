import type { DishInterface } from "./DishInterface";

export interface OrderInterface {
    dish: DishInterface;
    quantity: number;
    price: number;
    time: number; 
}