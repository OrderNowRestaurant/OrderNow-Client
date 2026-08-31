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

    const [selectedCategory, setSelectedCategory] = useState<string | null>("");

    if (loading) {
        return <p className="px-4 py-8 text-(--secondary-text)">Cargando platos...</p>;
    }

    if (error) {
        return <p className="px-4 py-8 text-(--error)">Ocurrió un error: {error}</p>;
    }

    const filteredCategories = selectedCategory === ""
        ? categoryWithDishes
        : categoryWithDishes.filter((cat) => cat.categoryName === selectedCategory);

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-6">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-(--secondary-text)">Explora</p>
                    <h2 className="text-3xl font-black text-(--primary-text)">Nuestros Platos</h2>
                </div>

                <label className="relative block">
                    <span className="sr-only">Filtrar por categoría</span>
                    <select
                        value={selectedCategory ?? ""}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full min-w-56 appearance-none rounded-full border border-(--border)/10 bg-(--surface) px-4 py-3 pr-10 text-sm font-medium text-(--primary-text) shadow-[0_6px_18px_rgba(15,23,42,0.06)] outline-none transition focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20 md:w-auto"
                    >
                        <option value="">Todas las categorías</option>

                        {categoryList.map((category: CategoryInterface) => (
                            <option key={category.name} value={category.name ?? ""}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-(--secondary-text)">▾</span>
                </label>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {filteredCategories.map((category: CategoryWithDishInterface) => (
                    <div key={category.categoryName} className="rounded-2xl bg-(--surface)/60 p-3 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.03)]">
                        <h3 className="mb-4 border-b border-(--border)/10 pb-2 text-xl font-bold text-(--primary-text)">
                            {category.categoryName}
                        </h3>

                        <div className="flex flex-col gap-4">
                            {category.dishes.map((dish: DishInterface) => (
                                <DishCard key={dish.name} {...dish} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};