import logo from "./logo.svg"
import "./App.css"
import Nav from "./components/nav/Nav"
import {nav} from "./components/forras/navItems.js"
import {termekek} from "./components/forras/termekek.js"
import Kartya from "./components/kartya/Kartya.jsx"
import Kartyak from "./components/kartyak/Kartyak.jsx"

function App() {
	return (
		<div className="App">
			<header className="App-header">Karsai Bence</header>
			<main>
				<nav>
					<Nav nav={nav} />
				</nav>
				<article>
					<Kartyak termekek={termekek} />
				</article>
				<footer></footer>
			</main>
		</div>
	)
}

export default App
