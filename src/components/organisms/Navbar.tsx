import type React from "react"
import { Link } from "react-router-dom"
import type { NavInterface } from "../../interfaces/NavInterface"

export const Navbar: React.FC<NavInterface> = ({ navLinks }) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-(--surface) shadow-lg md:hidden flex items-center">
            <div className="flex gap-10 flex-wrap grid grid-cols-3 mx-auto">
                {navLinks.map((link) => (
                    <Link key={link.navName} to={link.navLink} className="py-2 px-5 hover:bg-(--background) transition-all col-span-1 text-center">
                        {link.navName}
                    </Link>
                ))}
            </div>
        </nav>
    )
}