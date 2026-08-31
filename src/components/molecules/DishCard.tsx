import type React from "react";
import type { DishInterface } from "../../interfaces/DishInterface";
import { useOrder } from "../../hooks/useOrder";

export const DishCard: React.FC<DishInterface> = (dish: DishInterface) => {
    const { addToOrder } = useOrder();
    const categoryLabel = typeof dish.category === "string" ? dish.category : dish.category?.name ?? "Sin categoría";

    return (
        <article className="group flex items-center gap-4 rounded-2xl border border-(--border)/10 bg-(--background) p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(37,99,235,0.12)]">
            <div className="flex-1 min-w-0">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-(--primary-text) leading-tight">{dish.name}</h2>
                    <span className="rounded-full bg-(--surface) px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-(--secondary-text)">
                        {categoryLabel}
                    </span>
                </div>

                <p className="mb-4 text-sm leading-6 text-(--secondary-text)">{dish.description}</p>

                <div className="flex items-center justify-between gap-3 text-sm text-(--primary-text)">
                    <div className="flex items-center gap-2 rounded-full bg-(--surface) px-2.5 py-1.5">
                        <span className="font-medium">Precio</span>
                        <span className="font-bold text-(--primary)">{dish.price} €</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-(--surface) px-2.5 py-1.5">
                        <span className="font-medium">⏱</span>
                        <span className="font-semibold">{dish.time} min</span>
                    </div>
                </div>
            </div>

            <button
                type="button"
                onClick={() => addToOrder(dish)}
                aria-label={`Añadir ${dish.name} al pedido`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--primary) text-xl font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.28)] transition-all duration-200 hover:scale-105 hover:bg-(--secondary) active:scale-95"
            >
                +
            </button>
        </article>
    );
};