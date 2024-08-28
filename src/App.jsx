import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Offer from "./pages/Offer";

// Components

function App() {
  return (
    <Router>
      <header>Je suis le header</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
      <footer></footer>
    </Router>
  );
}

export default App;
