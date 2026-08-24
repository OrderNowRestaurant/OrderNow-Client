import { useDishes } from "../../hooks/useDishes";

export const Menu = () => {
    const { dishes, loading, error } = useDishes();

    if (loading) {
        return <p className="text-gray-500">Cargando platos...</p>;
    }

    if (error) {
        return <p className="text-red-500">Ocurrió un error: {error}</p>;
    }

    return (
        <section className="menu-container p-4">
            <h2 className="text-2xl font-bold mb-4">Nuestros Platos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dishes.map((dish) => (
                    <div key={dish.name} className="border p-4 rounded-lg shadow-sm">
                        {dish.name}
                    </div>
                ))}
            </div>
        </section>
    );
}