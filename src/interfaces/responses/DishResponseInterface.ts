import type { DishInterface } from "../DishInterface";
import type { BaseResponse } from "./BaseResponse";

export interface DishResponseInterface extends BaseResponse {
    dishList: DishInterface[];
}