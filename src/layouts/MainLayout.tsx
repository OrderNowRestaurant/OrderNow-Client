import { Header } from '../components/organisms/Header';
import { Navbar } from '../components/organisms/Navbar';
import { useQueryParam } from '../hooks/useQueryParams';
import type { MainLayoutInterface } from '../interfaces/MainLayoutInterface';
import type { NavLinkInterface } from '../interfaces/NavLinkInterface';



export const MainLayout: React.FC<MainLayoutInterface> = ({ children }) => {
    const urlParam = useQueryParam("token");

    const navLinks: NavLinkInterface[] = [
        { navName: 'Inicio', navLink: '/?token=' + urlParam }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-(--background)">
            <Header />
            <main className="flex-1 pb-24 md:pb-10">{children}</main>
            <Navbar navLinks={navLinks} />
        </div>
    );
};