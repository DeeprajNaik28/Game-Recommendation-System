import { Link } from "react-router-dom"

function GameCard({ game }) {

  return (
    <Link to={`/game/${game.id}`}>

      <div className="bg-slate-800 rounded-3xl p-5 hover:bg-slate-700 hover:-translate-y-2 transition duration-300 shadow-xl h-full border border-slate-700">

        <h3 className="text-2xl font-bold text-cyan-300 leading-tight">
          {game.name}
        </h3>

        <p className="text-slate-400 mt-3">
          Genre: {game.genre}
        </p>

        <p className="text-slate-400">
          RAM: {game.ram_gb} GB
        </p>

        <p className="text-slate-400">
          GPU: {game.gpu}
        </p>

        {/* TAGS */}

        <div className="mt-4 flex flex-wrap gap-2">

          {game.tags.split(";").map((tag, index) => (

            <span
              key={index}
              className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>

          ))}

        </div>

      </div>

    </Link>
  )
}

export default GameCard