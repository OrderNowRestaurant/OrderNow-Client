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

    const removeFromOrder = (dish: DishInterface) => {
        setOrderList((prevList) => 
            prevList.filter((item) => item.dish.name !== dish.name)
        );
    };

    const plusQuantity = (dish: DishInterface) => {
        addToOrder(dish);
    };

    const minusQuantity = (dish: DishInterface) => {
        setOrderList((prevList) => {
            const existingIndex = prevList.findIndex((item) => item.dish.name === dish.name);

            if (existingIndex < 0) return prevList;

            const updatedList = [...prevList];
            const item = updatedList[existingIndex];

            if (item.quantity > 1) {
                const newQuantity = item.quantity - 1;
                updatedList[existingIndex] = {
                    ...item,
                    quantity: newQuantity,
                    price: dish.price * newQuantity,
                    time: dish.time * newQuantity,
                };
                return updatedList;
            }

            return prevList.filter((i) => i.dish.name !== dish.name);
        });
    };

    const clearOrder = () => {
        setOrderList([]);
    };

    const totalPrice = orderList.reduce(
        (acc, item) => acc + item.price,
        0
    );

    return (
        <OrderContext.Provider value={{ 
            orderList, 
            addToOrder, 
            removeFromOrder, 
            plusQuantity, 
            minusQuantity,
            clearOrder,
            totalPrice 
        }}>
            {children}
        </OrderContext.Provider>
    );
};