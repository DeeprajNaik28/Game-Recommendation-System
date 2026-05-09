import { useState } from "react"
import { Link } from "react-router-dom"
import games from "../data/game_recommendation_dataset.json"
import GameCard from "../components/GameCard"
import Navbar from "../components/Navbar"

function SystemFinder() {

  const [ram, setRam] = useState(8)

  const compatibleGames = games.filter(
    (game) => game.ram_gb <= ram
  )

  return (
    <div className="min-h-screen bg-slate-900 text-white">

  <Navbar />

  <div className="p-6">

      {/* HEADER */}

    <div className="mb-10">

  <h1 className="text-4xl font-bold text-cyan-400">
    System Requirement Finder
  </h1>

  <p className="text-slate-400 mt-2">
    Find games compatible with your PC
  </p>

</div>

      {/* FILTER SECTION */}

      <div className="bg-slate-800 p-6 rounded-2xl mb-10 max-w-xl">

        <label className="block mb-4 text-xl">
          Select Your RAM
        </label>

        <select
          value={ram}
          onChange={(e) => setRam(Number(e.target.value))}
          className="w-full p-4 rounded-xl bg-slate-700 border border-slate-600"
        >

          <option value={4}>4 GB</option>
          <option value={8}>8 GB</option>
          <option value={12}>12 GB</option>
          <option value={16}>16 GB</option>
          <option value={32}>32 GB</option>

        </select>

      </div>

      {/* RESULTS */}

      <h2 className="text-3xl font-bold mb-6">
        Compatible Games ({compatibleGames.length})
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {compatibleGames.map((game) => (

         <GameCard
  key={game.id}
  game={game}
/>

        ))}

      </div>
</div>
    </div>
  )
}

export default SystemFinder