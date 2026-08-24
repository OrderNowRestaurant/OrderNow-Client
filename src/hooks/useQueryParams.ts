export const useQueryParam = (paramName: string): string => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(paramName) ?? "";
};