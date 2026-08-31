import { useOrder } from "../../hooks/useOrder";
import type { DishCartCardProps } from "../../interfaces/DishCartCardProps";

export const DishCartCard: React.FC<DishCartCardProps> = ({ dish, quantity }) => {
    const { removeFromOrder, plusQuantity, minusQuantity } = useOrder();

    return (
        <article className="flex items-center gap-4 rounded-2xl border border-(--border)/10 bg-(--background) p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
            <div className="flex-1 min-w-0">
                <div className="mb-3 flex items-start justify-between gap-2">
                    <h2 className="text-lg font-bold text-(--primary-text)">{dish.name}</h2>
                    <button
                        type="button"
                        onClick={() => removeFromOrder(dish)}
                        className="cursor-pointer text-(--error) transition hover:opacity-80 active:scale-95"
                        aria-label={`Eliminar ${dish.name}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                    </button>
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

            <div className="flex items-center gap-2 rounded-full border border-(--border)/10 bg-(--surface) px-2 py-1.5">
                <button
                    type="button"
                    onClick={() => minusQuantity(dish)}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-(--primary) text-lg font-bold text-white transition hover:scale-105 active:scale-95"
                >
                    -
                </button>

                <span className="min-w-6 text-center text-sm font-bold text-(--primary-text)">{quantity}</span>

                <button
                    type="button"
                    onClick={() => plusQuantity(dish)}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-(--primary) text-lg font-bold text-white transition hover:scale-105 active:scale-95"
                >
                    +
                </button>
            </div>
        </article>
    );
};