import { useEffect, useState } from "react";
import { useOrder } from "../../hooks/useOrder";
import { useQueryParam } from "../../hooks/useQueryParams";
import { orderService } from "../../services/orderService";

export const SendCartBadge = () => {
    const { orderList, clearOrder } = useOrder();
    const qrToken = useQueryParam("token");
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [sendError, setSendError] = useState("");
    const totalItems = orderList.reduce((acc, item) => acc + item.quantity, 0);

    const handleClick = () => {
        setSendError("");
        setIsConfirmationOpen(true);
    };

    const handleSendOrder = async () => {
        setIsSending(true);
        setSendError("");

        try {
            await orderService.create(qrToken, orderList);
            setIsConfirmationOpen(false);
            clearOrder();
        } catch {
            setSendError("No se pudo enviar el pedido. Inténtalo de nuevo.");
        } finally {
            setIsSending(false);
        }
    };

    const closeConfirmation = () => {
        setIsConfirmationOpen(false);
    };

    useEffect(() => {
        if (!isConfirmationOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeConfirmation();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isConfirmationOpen]);

    return (
        <>
            {totalItems > 0 && (
                <button 
                    onClick={handleClick}
                    className="fixed bottom-24 right-6 bg-(--primary) text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 z-50 cursor-pointer flex items-center justify-center group"
                    aria-label="Enviar pedido a cocina"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                </button>
            )}

            {isConfirmationOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    role="presentation"
                    onClick={closeConfirmation}
                >
                    <section
                        className="w-full max-w-md rounded-lg bg-(--background) p-6 text-(--primary-text) shadow-2xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="order-confirmation-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h2 id="order-confirmation-title" className="text-xl font-bold">
                            Confirmar pedido
                        </h2>
                        <p className="mt-2 text-(--secondary-text)">
                            Estos son los platos que tienes. ¿Quieres enviarlos a cocina?
                        </p>

                        <ul className="mt-4 flex max-h-60 flex-col gap-3 overflow-y-auto border-y border-(--secondary-text)/30 py-4">
                            {orderList.map((item) => (
                                <li key={item.dish.name} className="flex items-center justify-between gap-4">
                                    <span>{item.dish.name}</span>
                                    <span className="shrink-0 font-semibold">x{item.quantity}</span>
                                </li>
                            ))}
                        </ul>

                        {sendError && (
                            <p className="mt-4 text-(--error)" role="alert">
                                {sendError}
                            </p>
                        )}

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={closeConfirmation}
                                disabled={isSending}
                                className="rounded-md border border-(--border) px-4 py-2 font-semibold hover:bg-(--surface) cursor-pointer"
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                onClick={handleSendOrder}
                                disabled={isSending}
                                className="rounded-md bg-(--primary) px-4 py-2 font-semibold text-white hover:opacity-90 cursor-pointer"
                            >
                                {isSending ? "Enviando..." : "Enviar a cocina"}
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
};