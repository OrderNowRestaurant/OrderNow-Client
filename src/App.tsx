import './App.css'
import { Menu } from './components/organisms/Menu'
import { MainLayout } from './layouts/MainLayout'

function App() {

	return (
		<>
			<MainLayout children={<Menu />}/>
		</>
	)
}

export default App
