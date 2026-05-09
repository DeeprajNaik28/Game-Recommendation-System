import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GameDetails from "./pages/GameDetails"
import SystemFinder from "./pages/SystemFinder"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/game/:id" element={<GameDetails />} />
	
	<Route path="/system-finder" element={<SystemFinder />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App