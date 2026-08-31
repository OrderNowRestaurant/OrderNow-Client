export interface DishCategory {
    name: string;
    createdAt?: string;
}

export interface DishInterface {
    name: string;
    description: string;
    category: string | DishCategory;
    time: number;
    price: number;
}