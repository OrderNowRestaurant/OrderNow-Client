import { useState, useEffect } from 'react';
import { dishService } from '../services/dishService';
import { useQueryParam } from './useQueryParams';
import type { CategoryWithDishInterface } from '../interfaces/CategoryWithDishInterface';

export const useDishes = () => {
    const [categoryWithDishes, setCategories] = useState<CategoryWithDishInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const urlParam = useQueryParam("token");

    useEffect(() => {
		dishService.getAll(urlParam)
			.then((data) => {
				setCategories(data.categories);
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
    }, [urlParam, setCategories]);

    return { categoryWithDishes, loading, error };
};