import { useState, useEffect } from 'react';
import { categoryService } from '../services/categoryService';
import { useQueryParam } from './useQueryParams';
import type { CategoryInterface } from '../interfaces/CategoryInterface';

export const useCategories = () => {
    const [categoryList, setCategories] = useState<CategoryInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const urlParam = useQueryParam("token");

    useEffect(() => {
        categoryService.getAll(urlParam)
            .then((data) => {
                setCategories(data.categoryList);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [urlParam, setCategories]);

    return { categoryList, loading, error };
};