import { Link } from "react-router-dom"

function Navbar() {

  return (
    <header className="p-5 border-b border-slate-700 bg-slate-900 sticky top-0 z-50">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <Link to="/">

          <h1 className="text-4xl font-bold text-cyan-400">
            Spec2Play
          </h1>

        </Link>

        <nav className="flex flex-wrap gap-6">

          <Link
            to="/"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/system-finder"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            System Finder
          </Link>

        </nav>

      </div>

    </header>
  )
}

export default Navbar