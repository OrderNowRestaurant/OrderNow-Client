import type { DishResponseInterface } from '../interfaces/responses/DishResponseInterface';
import { baseApiService } from './baseApiService';

export const dishService = {
    getAll: (qrToken: string) => baseApiService<DishResponseInterface>('/dish/' + qrToken)
};