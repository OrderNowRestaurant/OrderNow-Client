import { useState, useEffect } from 'react';
import { dishService } from '../services/dishService';
import type { DishInterface } from '../interfaces/DishInterface';

export const useDishes = () => {
    const [dishes, setDishes] = useState<DishInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
		dishService.getAll("b9b07bd05fc84599ba74f8ecd07692f7dae201964188a5fa565533e8e4f65405")
			.then((data) => {
				setDishes(data.dishList);
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
    }, [setDishes]);

    return { dishes, loading, error };
};