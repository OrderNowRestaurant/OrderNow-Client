import { Header } from '../components/organisms/Header';
import { Navbar } from '../components/organisms/Navbar';
import type { MainLayoutInterface } from '../interfaces/MainLayoutInterface';
import type { NavLinkInterface } from '../interfaces/NavLinkInterface';

const navLinks: NavLinkInterface[] = [
  { navName: 'Inicio', navLink: '/' },
  { navName: 'Menú', navLink: '/menu' },
  { navName: 'Pedidos', navLink: '/orders' },
];

export const MainLayout: React.FC<MainLayoutInterface> = ({ children  }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header /> 
            <main className="flex-1 pb-2 md:pb-6 background-(--background)">{children}</main>
            <Navbar navLinks={navLinks}/>
        </div>
    );
};