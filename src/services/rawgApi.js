const API_KEY = "2f3035a1b63f400386b646e28b35d33f"

export async function fetchGameData(gameName) {

  try {

    const response = await fetch(
      `https://api.rawg.io/api/games?search=${gameName}&key=${API_KEY}`
    )

    if (!response.ok) {
      throw new Error("Failed to fetch game data")
    }

    const data = await response.json()

    return data.results[0]

  } catch (error) {

    console.error(error)

    return {
      error: true
    }

  }
}