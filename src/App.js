import "./App.css"
import Nav from "./components/nav/Nav"
import {nav} from "./components/forras/navItems.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Fooldal from "./components/pages/Fooldal.jsx"
import Kosar from "./components/pages/Kosar.jsx"

function App() {
	return (
		<Router>
			<Nav nav={nav} />
			<Routes>
        <Route path="/index" element={<Fooldal />} />
				<Route path="/kosar" element={<Kosar />} />
			</Routes>
		</Router>
	)
}

export default App
