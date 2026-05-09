import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import games from "../data/game_recommendation_dataset.json"
import { fetchGameData } from "../services/rawgApi"
import Navbar from "../components/Navbar"

function GameDetails() {

  const { id } = useParams()

  const game = games.find((g) => g.id === Number(id))

  const [apiData, setApiData] = useState(null)

const [loading, setLoading] = useState(true)

const [error, setError] = useState(false)

 useEffect(() => {

  async function loadGameData() {

    setLoading(true)

    const data = await fetchGameData(game.name)

    if (data?.error) {

      setError(true)

    } else {

      setApiData(data)

    }

    setLoading(false)
  }

  loadGameData()

}, [game.name])


  if (!game) {
    return (
      <div className="text-white p-10">
        Game not found
      </div>
    )
  }

  // RECOMMENDATIONS
const recommendations = games
  .map((g) => {

    if (g.id === game.id) return null

    let score = 0

    // SAME GENRE
    if (g.genre === game.genre) {
      score += 40
    }

    // SHARED TAGS
    const selectedTags = game.tags.split(";")
    const currentTags = g.tags.split(";")

    selectedTags.forEach((tag) => {
      if (currentTags.includes(tag)) {
        score += 15
      }
    })

    // SIMILAR RAM
    const ramDifference = Math.abs(
      g.ram_gb - game.ram_gb
    )

    if (ramDifference <= 4) {
      score += 20
    }

    // SIMILAR STORAGE
    const storageDifference = Math.abs(
      g.storage_gb - game.storage_gb
    )

    if (storageDifference <= 40) {
      score += 10
    }

    // SAME GPU FAMILY
    if (
      g.gpu.includes("GTX") &&
      game.gpu.includes("GTX")
    ) {
      score += 15
    }

    return {
      ...g,
      similarityScore: score
    }

  })

  .filter((g) => g && g.similarityScore >= 50)

  .sort(
    (a, b) =>
      b.similarityScore - a.similarityScore
  )

  .slice(0, 6)



 return (
  <div className="min-h-screen bg-slate-900 text-white">

    <Navbar />

    <div className="p-6">
      

      {/* GAME DETAILS */}

      <div className="mt-6 bg-slate-800 rounded-2xl overflow-hidden">

     {/* LOADING */}

{loading && (

  <div className="h-[400px] flex items-center justify-center bg-black">

    <div className="text-center">

      <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto"></div>

      <p className="mt-4 text-slate-400">
        Loading game data...
      </p>

    </div>

  </div>

)}

{/* ERROR */}

{error && (

  <div className="h-[400px] flex items-center justify-center bg-black text-center p-6">

    <div>

      <h2 className="text-2xl text-red-400 font-bold">
        Failed to load game image
      </h2>

      <p className="text-slate-400 mt-3">
        RAWG API may be unavailable right now
      </p>

    </div>

  </div>

)}

{/* GAME IMAGE */}

{!loading && !error && apiData?.background_image && (

          <img
            src={apiData.background_image}
            alt={game.name}
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-contain bg-black transition duration-500"
          />

        )}

        <div className="p-8">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300">
            {game.name}
          </h1>

          {/* API DATA */}

          {apiData && (

            <div className="mt-4">

              <p className="text-yellow-400 text-lg">
                ⭐ Rating: {apiData.rating}
              </p>

              <p className="text-slate-400">
                Released: {apiData.released}
              </p>

            </div>

          )}

          {/* LOCAL DATA */}

          <div className="mt-6 space-y-2">

            <p className="text-xl text-slate-300">
              Genre: {game.genre}
            </p>

            <p className="text-slate-400">
              RAM: {game.ram_gb} GB
            </p>

            <p className="text-slate-400">
              GPU: {game.gpu}
            </p>

            <p className="text-slate-400">
              CPU: {game.cpu}
            </p>

            <p className="text-slate-400">
              Storage: {game.storage_gb} GB
            </p>

          </div>

          {/* TAGS */}

          <div className="mt-6 flex flex-wrap gap-3">

            {game.tags.split(";").map((tag, index) => (

              <span
                key={index}
                className="bg-cyan-600 px-4 py-2 rounded-full"
              >
                {tag}
              </span>

            ))}

          </div>

        </div>

      </div>

      {/* RECOMMENDATIONS */}

      <section className="mt-14">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Similar Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {recommendations.map((game) => (

            <Link
              key={game.id}
              to={`/game/${game.id}`}
            >

              <div className="bg-slate-800 p-5 rounded-2xl hover:bg-slate-700 transition">

                <h3 className="text-2xl font-bold text-cyan-300">
                  {game.name}
                </h3>

                <p className="text-slate-400 mt-2">
                  {game.genre}
                </p>

		<p className="text-cyan-400 mt-2">
			Match Score: {game.similarityScore}
		</p>

              </div>

            </Link>

          ))}

        </div>

      </section>
</div>
    </div>
  )
}

export default GameDetails