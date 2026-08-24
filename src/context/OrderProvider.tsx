import { useState } from "react";
import type { DishInterface } from "../interfaces/DishInterface";
import type { OrderInterface } from "../interfaces/OrderInterface";
import { OrderContext } from "./OrderContext";

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [orderList, setOrderList] = useState<OrderInterface[]>([]);

    const addToOrder = (dish: DishInterface) => {
        setOrderList((prevList) => {
            const existingIndex = prevList.findIndex((item) => item.dish.name === dish.name);

            if (existingIndex >= 0) {
                const updatedList = [...prevList];
                const item = updatedList[existingIndex];
                const newQuantity = item.quantity + 1;

                updatedList[existingIndex] = {
                    ...item,
                    quantity: newQuantity,
                    price: dish.price * newQuantity,
                    time: dish.time * newQuantity,
                };

                return updatedList;
            }

            const newOrderItem: OrderInterface = {
                dish,
                quantity: 1,
                price: dish.price,
                time: dish.time,
            };

            return [...prevList, newOrderItem];
        });
    };

    const totalPrice = orderList.reduce(
        (acc, item) => acc + item.price,
        0
    );

    return (
        <OrderContext.Provider value={{ orderList, addToOrder, totalPrice }}>
            {children}
        </OrderContext.Provider>
    );
};