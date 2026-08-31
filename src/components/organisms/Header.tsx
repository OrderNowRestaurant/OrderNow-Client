import logo from "../../assets/logo.png";

export const Header = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-(--border)/10 bg-(--background)/90 backdrop-blur-md">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-3">
                <div className="flex items-center justify-center rounded-full border border-(--primary)/15 bg-(--surface) p-2 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                    <img src={logo} alt="Logo de la aplicación" className="h-12 w-12 object-contain" />
                </div>
            </nav>
        </header>
    );
};