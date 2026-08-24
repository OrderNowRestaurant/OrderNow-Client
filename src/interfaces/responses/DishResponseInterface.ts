import type { CategoryWithDishInterface } from "../CategoryWithDishInterface";
import type { BaseResponse } from "./BaseResponse";

export interface DishResponseInterface extends BaseResponse {
    categories: CategoryWithDishInterface[];
}