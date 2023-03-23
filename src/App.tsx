import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Games from "./pages/Games";
import Markteplace from "./pages/Marketplace";
import BattlePass from "./pages/BattlePass";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/games" element={<Games />} />
          <Route path="/marketplace" element={<Markteplace />} />
          <Route path="/battlepass" element={<BattlePass />} />
        </Routes>
      </div>
    </>
  )
}

export default App;

