import "./App.css"
import Nav from "./components/nav/Nav"
import {nav} from "./components/forras/navItems.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Fooldal from "./pages/Fooldal.jsx"
import Kosar from "./pages/Kosar.jsx"
import {useState} from "react"

function App() {
	const [lista, setlista] = useState([])

	function getKosarItems(obj) {
		// Ellenőrizzük, hogy az objektum szerepel-e a kosárban
		if (!lista.some((e) => e.id === obj.id)) {
			// Ha nem szerepel, akkor hozzáadjuk
			setlista([...lista, {...obj, mennyiseg: 1}]) // Új objektum mennyiséggel
		} else {
			// Ha már szerepel a kosárban, növeljük a mennyiségét
			setlista(lista.map((e) => (e.id === obj.id ? {...e, mennyiseg: e.mennyiseg + 1} : e)))
		}
	}

	function mennycsokkentes(id) {
		setlista((prevLista) => {
			return prevLista.reduce((acc, e) => {
				if (e.id === id) {
					if (e.mennyiseg > 1) {
						acc.push({...e, mennyiseg: e.mennyiseg - 1})
					} // Ha 1-nél kisebb a mennyiség, nem adunk hozzá elemet
				} else {
					acc.push(e) // Hozzáadjuk a többi elemet
				}
				return acc
			}, [])
		})
	}
	function mennyNoveles(id) {
		setlista((prevLista) =>
			prevLista.map((e) => {
				if (e.id === id) {
					return {...e, mennyiseg: e.mennyiseg + 1} // Növeljük a mennyiséget
				}
				return e // Visszaadjuk az elemet, ha nem egyezik az ID
			})
		)
	}

	return (
		<Router>
			<Nav nav={nav} />
			<Routes>
				<Route path="/" element={<Fooldal fn={getKosarItems} />} />
				<Route path="/kosar" element={<Kosar lista={lista} fnN={mennyNoveles} fnCs={mennycsokkentes} />} />
			</Routes>
		</Router>
	)
}

export default App
