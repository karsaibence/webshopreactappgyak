import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import lista from "../src/components/forras/navItems.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">Karsai Bence</header>
      <main>
        <nav>
          <Nav lista={lista} />
        </nav>
        <article></article>
        <footer></footer>
      </main>

    </div>
  );
}

export default App
