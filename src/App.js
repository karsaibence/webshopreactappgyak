import "./App.css";
import Nav from "./components/nav/Nav";
import { nav } from "./navItems.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fooldal from "./pages/Fooldal.jsx";
import Kosar from "./pages/Kosar.jsx";
import { useContext } from "react";
import { KosarContext } from "./context/KosarbaTesz.jsx";
import NoPage from "./pages/NoPage.jsx";

function App() {
  const { lista } = useContext(KosarContext);

  return (
    <Router >
      <Nav nav={nav} />
      <Routes>
        <Route path="/" element={<Fooldal />} />
        <Route path="/kosar" element={<Kosar lista={lista} />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
