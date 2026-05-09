import { useState } from "react"
import { Link } from "react-router-dom"
import games from "../data/game_recommendation_dataset.json"
import GameCard from "../components/GameCard"
import Navbar from "../components/Navbar"

function Home() {

const [searchTerm, setSearchTerm] = useState("")
const [visibleGames, setVisibleGames] = useState(6)

const [selectedGenre, setSelectedGenre] = useState("All")
const [sortOption, setSortOption] = useState("") 

const genres = [
  "All",
  ...new Set(games.map((game) => game.genre))
]

 
	let filteredGames = games.filter((game) => {

  const matchesSearch =
    game.name.toLowerCase().includes(
      searchTerm.toLowerCase()
    )

  const matchesGenre =
    selectedGenre === "All" ||
    game.genre === selectedGenre

  return matchesSearch && matchesGenre
})


// SORTING

if (sortOption === "ram-low-high") {

  filteredGames.sort(
    (a, b) => a.ram_gb - b.ram_gb
  )

}

if (sortOption === "ram-high-low") {

  filteredGames.sort(
    (a, b) => b.ram_gb - a.ram_gb
  )

}

if (sortOption === "storage-low-high") {

  filteredGames.sort(
    (a, b) =>
      a.storage_gb - b.storage_gb
  )

}

if (sortOption === "a-z") {

  filteredGames.sort((a, b) =>
    a.name.localeCompare(b.name)
  )

}




  return (
    <div className="min-h-screen bg-slate-900 text-white">

<Navbar />

      <main className="p-6">

{/* HERO SECTION */}

<section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-700 p-6 md:p-10 mb-12">

  <div className="max-w-3xl">

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

      Find Games
      Perfect For
      Your PC

    </h1>

    <p className="mt-6 text-lg text-slate-200">

      Search games, discover recommendations,
      and find titles compatible with your system.

    </p>

    <div className="flex flex-wrap gap-4 mt-8">

    


    </div>

  </div>

  {/* GLOW EFFECT */}

  <div className="absolute -right-20 -top-20 w-72 h-72 bg-cyan-300 opacity-20 rounded-full blur-3xl"></div>

  <div className="absolute -bottom-20 left-10 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

</section>



        {/* SEARCH */}

        <section className="mb-10">

          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:max-w-xl p-4 rounded-2xl bg-slate-800 border border-slate-600 outline-none focus:border-cyan-400 transition shadow-lg"
          />

        </section>


<div className="flex flex-col md:flex-row gap-4 mt-4">

  {/* GENRE FILTER */}

  <select
    value={selectedGenre}
    onChange={(e) =>
      setSelectedGenre(e.target.value)
    }
    className="p-4 rounded-xl bg-slate-800 border border-slate-600"
  >

    {genres.map((genre, index) => (

      <option
        key={index}
        value={genre}
      >
        {genre}
      </option>

    ))}

  </select>

  {/* SORTING */}

  <select
    value={sortOption}
    onChange={(e) =>
      setSortOption(e.target.value)
    }
    className="p-4 rounded-xl bg-slate-800 border border-slate-600"
  >

    <option value="">
      Sort By
    </option>

    <option value="a-z">
      Alphabetical
    </option>

    <option value="ram-low-high">
      RAM Low → High
    </option>

    <option value="ram-high-low">
      RAM High → Low
    </option>

    <option value="storage-low-high">
      Storage Low → High
    </option>

  </select>

</div>

<br />

	<Link to="/system-finder">

 		<button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-semibold mb-10">
		Find Games For Your PC
		</button>

	</Link>


        {/* GAMES */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredGames.slice(0, visibleGames).map((game) => (

          <GameCard
  key={game.id}
  game={game}
/>

          ))}

        </div>

        {/* LOAD MORE */}

        {visibleGames < filteredGames.length && (

          <div className="text-center mt-10">

            <button
              onClick={() => setVisibleGames(visibleGames + 6)}
              className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl font-semibold"
            >
              Load More
            </button>

          </div>

        )}

      </main>

    </div>
  )
}

export default Home