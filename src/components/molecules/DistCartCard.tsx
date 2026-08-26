import { useOrder } from "../../hooks/useOrder";
import type { DishCartCardProps } from "../../interfaces/DishCartCardProps";



export const DishCartCard: React.FC<DishCartCardProps> = ({dish, quantity}) => {
    const { removeFromOrder, plusQuantity, minusQuantity } = useOrder(); 

    return (
        <div className="bg-(--surface) rounded-lg shadow-lg px-5 py-2 grid grid-cols-3">
            <div className="col-span-2">
                <div className="gap-2 flex flex-col">
                    <div className="flex justify-between">
                        <h1 className="text-md font-bold underline">{dish.name}</h1>
                    </div>
                    
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

            <div className="col-span-1 w-full flex items-center gap-2 grid grid-rows-3">
                <div className="row-span-1 w-full flex justify-end">
                    <button onClick={() => removeFromOrder(dish)} className="text-(--error) active:scale-105 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                    </button>
                </div>
                
                <div className="row-span-2 w-full flex items-center justify-center gap-1">
                    <button onClick={() => minusQuantity(dish)} className="py-1 px-3 rounded-full bg-(--primary) text-white cursor-pointer hover:scale-105 active:scale-95">
                        -
                    </button>

                    {quantity}

                    <button onClick={() => plusQuantity(dish)} className="py-1 px-3 rounded-full bg-(--primary) text-white cursor-pointer hover:scale-105 active:scale-95">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};