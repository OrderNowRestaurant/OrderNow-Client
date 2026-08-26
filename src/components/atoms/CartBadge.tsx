import { useNavigate } from "react-router-dom";
import { useOrder } from "../../hooks/useOrder";
import { useQueryParam } from "../../hooks/useQueryParams";

export const CartBadge = () => {
    const { orderList } = useOrder();
    const totalItems = orderList.reduce((acc, item) => acc + item.quantity, 0);

    const urlParam = useQueryParam("token");

    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/cart/" + "?token=" + urlParam); 
    };

    return (
        <button 
            onClick={handleClick}
            className="fixed bottom-6 right-6 bg-(--primary) text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 z-50 cursor-pointer flex items-center justify-center group"
            aria-label="Ver pedido"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>


            {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-(--secondary) text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-md animate-in zoom-in duration-150">
                    {totalItems > 99 ? '99+' : totalItems}
                </span>
            )}
        </button>
    );
};