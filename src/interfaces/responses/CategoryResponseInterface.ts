import type { CategoryInterface } from "../CategoryInterface";
import type { BaseResponse } from "./BaseResponse";

export interface CategoryResponseInterface extends BaseResponse {
    categoryList: CategoryInterface[];
}