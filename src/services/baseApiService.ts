const BASE_URL = 'http://localhost:8080/api/public';

export const baseApiService = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`Error en la petición: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
};