import type React from "react";
import type { DishInterface } from "../../interfaces/DishInterface";

export const DishCard: React.FC<DishInterface> = (dish: DishInterface) => {
    return (
        <div className="bg-(--surface) rounded-lg shadow-lg px-5 py-2 grid grid-cols-3">
            <div className="col-span-2">
                <div className="gap-2 flex flex-col">
                    <h1 className="text-md font-bold underline">{dish.name}</h1>
                    <h3 className="text-sm text-(--secondary-text)">{dish.description}</h3>
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
                <button className="py-2 px-4 rounded-full bg-(--primary) text-white cursor-pointer">
                    +
                </button>
            </div>
        </div>
    );
};