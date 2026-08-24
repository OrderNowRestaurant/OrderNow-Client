import type React from "react";
import type { DishInterface } from "../../interfaces/DishInterface";
import { useOrder } from "../../hooks/useOrder";

export const DishCard: React.FC<DishInterface> = (dish: DishInterface) => {
    const { addToOrder } = useOrder(); 

    return (
        <div className="bg-(--surface) rounded-lg shadow-lg px-5 py-2 grid grid-cols-3">
            <div className="col-span-2">
                <div className="gap-2 flex flex-col">
                    <h1 className="text-md font-bold underline">{dish.name}</h1>
                    <h3 className="text-sm text-(--secondary-text) mb-2">{dish.description}</h3>
                </div>

                <div className="text-sm flex justify-between flex-wrap">
                    <div>Precio: </div>
                    <div>{dish.price} €</div>
                </div>

                <div className="text-sm flex justify-between flex-wrap">
                    <div>Tiempo estimado: </div>
                    <div>{dish.time} min</div>
                </div>
            </div>

            <div className="col-span-1 w-full flex justify-center items-center">
                <button onClick={() => addToOrder(dish)} className="py-2 px-4 rounded-full bg-(--primary) text-white cursor-pointer hover:scale-105 active:scale-95">
                    +
                </button>
            </div>
        </div>
    );
};