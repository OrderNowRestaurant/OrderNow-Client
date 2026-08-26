import { useOrder } from "../../hooks/useOrder";
import type { OrderInterface } from "../../interfaces/OrderInterface";
import { DishCartCard } from "../molecules/DistCartCard";

export const CartView = () => {
    const { orderList } = useOrder();

    return (
        <>
        <section className="menu-container p-4">
            <div className="flex justify-between items-center flex-wrap">
                <h1 className="text-2xl font-bold">Enviar orden</h1>
            </div>

            <div className="flex flex-col gap-5">
                {orderList.length == 0 && <p className="text-(--secondary-text)">No hay platos seleccionados</p>}
                {orderList.length > 0 &&
                    orderList.map((order: OrderInterface) => (
                        <DishCartCard 
                            key={order.dish.name} 
                            dish={order.dish} 
                            quantity={order.quantity} 
                        />
                    ))
                }
            </div>
        </section>
        </>
    )
}