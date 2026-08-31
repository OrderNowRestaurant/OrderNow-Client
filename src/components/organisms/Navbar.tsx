import type React from "react";
import { Link } from "react-router-dom";
import type { NavInterface } from "../../interfaces/NavInterface";

export const Navbar: React.FC<NavInterface> = ({ navLinks }) => {
    return (
        <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-full border border-(--border)/10 bg-(--surface)/95 p-2 shadow-[0_12px_30px_rgba(15,23,42,0.18)] backdrop-blur-md md:hidden">
            <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                    <Link
                        key={link.navName}
                        to={link.navLink}
                        className="cursor-pointer rounded-full px-4 py-3 text-center text-sm font-semibold text-(--secondary-text) transition-all duration-200 hover:bg-(--background) hover:text-(--primary-text)"
                    >
                        {link.navName}
                    </Link>
                ))}
            </div>
        </nav>
    );
};