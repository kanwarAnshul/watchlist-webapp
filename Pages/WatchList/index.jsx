import { useEffect, useState } from 'react'

function Watchlist() {
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist'))
    if (storedWatchlist) {
      setWatchlist(storedWatchlist)
    }
  }, [])

  const removeFromWatchlist = (imdbID) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.imdbID !== imdbID)
    setWatchlist(updatedWatchlist)
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist)) // Update localStorage
  }

  return (
    <div className=" text-white p-6 rounded-lg mb-4">
      <h2 className="text-4xl font-bold mb-4 text-black">Movies by Tom cruies</h2>
      <p className="text-2xl font-bold mb-4 text-black">About this watchlist</p>
      <br />
      <p className="text-2xl font-bold mb-4 text-black">This list lorem dolor et blah blah blah</p>
      {watchlist.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {watchlist.map((movie) => (
            <div key={movie.imdbID} className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
                alt={movie.Title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{movie.Title}</h2>
                <p className="text-sm text-gray-500">Release Year: {movie.Year}</p>
              </div>
              <div className="p-4">
                <button
                  onClick={() => removeFromWatchlist(movie.imdbID)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg">Your watchlist is empty.</p>
      )}
    </div>
  )
}

export default Watchlist
