import logo from "../../assets/logo.png";

export const Header = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-(--border)/10 bg-(--background)/90 backdrop-blur-md">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-2">
                <div className="flex items-center justify-center bg-transparent p-1">
                    <img src={logo} alt="Logo de la aplicación" className="h-10 w-10 object-contain" />
                </div>
            </nav>
        </header>
    );
};