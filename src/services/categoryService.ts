import type { CategoryResponseInterface } from '../interfaces/responses/CategoryResponseInterface';
import { baseApiService } from './baseApiService';

export const categoryService = {
    getAll: (qrToken: string) => baseApiService<CategoryResponseInterface>('/category/' + qrToken)
};