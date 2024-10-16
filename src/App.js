import "./App.css"
import Nav from "./components/nav/Nav"
import {nav} from "./components/forras/navItems.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Fooldal from "./components/pages/Fooldal.jsx"
import Kosar from "./components/pages/Kosar.jsx"

function App() {
	let kosarLista = []
	function getKosarItems(lista) {
		kosarLista = lista
		console.log(kosarLista)
	}
	return (
		<Router>
			<Nav nav={nav} />
			<Routes>
				<Route path="/index" element={<Fooldal fn={getKosarItems} />} />
				<Route path="/kosar" element={<Kosar kosarLista={kosarLista} />} />
			</Routes>
		</Router>
	)
}

export default App
