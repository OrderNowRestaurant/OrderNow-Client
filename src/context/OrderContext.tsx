import { createContext } from "react";
import type { OrderContextType } from "../interfaces/OrderContextType";

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

