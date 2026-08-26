import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Menu } from './components/organisms/Menu';
import { OrderProvider } from './context/OrderProvider';
import { MainLayout } from './layouts/MainLayout';
import { CartBadge } from './components/atoms/CartBadge'; 
import { CartView } from './components/organisms/CartView';
import { SendCartBadge } from './components/atoms/SendCartBadge';

function App() {
    return (
        <BrowserRouter>
            <OrderProvider>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Menu />} />
                        <Route path="/cart" element={<CartView />} />
                    </Routes>
                </MainLayout>

                <CartBadge />
                <SendCartBadge/>
            </OrderProvider>
        </BrowserRouter>
    );
}

export default App;