import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// C O M P O N E N T S
import Header from "./components/Header";

// P A G E S
import Home from "./pages/Home";
import Vintage from "./pages/Vintage";
import Modern from "./pages/Modern";
import Info from "./pages/Info";
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ogs" element={<Vintage />} />
        <Route path="/newschool" element={<Modern />} />
        <Route path="/info" element={<Info/>} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </Router>
  );
}

export default App;
