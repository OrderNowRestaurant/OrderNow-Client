import './App.css'
import { Menu } from './components/organisms/Menu'
import { OrderProvider } from './context/OrderProvider'
import { MainLayout } from './layouts/MainLayout'

function App() {

	return (
		<OrderProvider>
			<MainLayout children={<Menu />}/>
		</OrderProvider>
	)
}

export default App
