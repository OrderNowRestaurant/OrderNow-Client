import type { DishInterface } from "./DishInterface";

export interface CategoryWithDishInterface {
    categoryName: string;
    dishes: DishInterface[];
}