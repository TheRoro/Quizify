import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import './components/search/Search'
import Search from './components/search/Search'
import SelectMode from './components/selectMode/SelectMode'

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/mode'>
					<SelectMode></SelectMode>
				</Route>
				<Route path='/'>
					<Search></Search>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
