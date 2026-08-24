import { useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import { useDishes } from "../../hooks/useDishes";
import type { CategoryInterface } from "../../interfaces/CategoryInterface";
import type { CategoryWithDishInterface } from "../../interfaces/CategoryWithDishInterface";
import type { DishInterface } from "../../interfaces/DishInterface";
import { DishCard } from "../molecules/DishCard";

export const Menu = () => {
    const { categoryWithDishes, loading, error } = useDishes();
    const { categoryList } = useCategories();
    
    const [ selectedCategory, setSelectedCategory ] = useState<string | null>("");

    

    if (loading) {
        return <p className="text-(--secondary-text)">Cargando platos...</p>;
    }

    if (error) {
        return <p className="text-(--error)">Ocurrió un error: {error}</p>;
    }

    const filteredCategories = selectedCategory === ""
        ? categoryWithDishes
        : categoryWithDishes.filter((cat) => cat.categoryName === selectedCategory);

    return (
        <section className="menu-container p-4">
            <div className="flex justify-between items-center flex-wrap">
                <h2 className="text-2xl font-bold mb-4">Nuestros Platos</h2>

                <select 
                    value={selectedCategory ?? ""}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-(--surface) py-2 px-1 text-sm border border-(--border) rounded-lg cursor-pointer"
                >
                    <option value="">Todas las categorías</option>

                    {categoryList.map((category: CategoryInterface) => (
                        <option key={category.name} value={category.name ?? ""}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredCategories.map((category: CategoryWithDishInterface) => (
                    <div key={category.categoryName}>
                        <h1 className="col-span-1 md:col-span-3 text-xl font-bold mt-4 mb-2 border-b pb-1">
                            {category.categoryName}
                        </h1>

                        <div className="flex flex-col gap-5">
                            {category.dishes.map((dish: DishInterface) => (
                                <DishCard key={dish.name} {...dish} />
                            ))}
                        </div>

                        
                    </div>
                ))}
            </div>
        </section>
    );
}