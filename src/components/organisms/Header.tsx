import logo from "../../assets/logo.png"

export const Header = () => {
    return (
        <nav className="bg-(--surface) w-full py-2 flex items-center shadow-lg">
            <img src={logo} alt="Logo de la aplicación" className="w-15 mx-auto"/>
        </nav>
    )
}