import { useState, useEffect } from 'react';
// import {  } from '../services/movieService';
import { fetchMovies } from '../../Services/MovieServices';
import { useWatchlist } from '../../Hooks/useWatchlistHook';
import MovieCard from '../../Components/MovieCard';
import SearchBar from '../../Components/SearchBar';
import Watchlist from '../WatchList';
const MovieHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [watchlist, toggleWatchlist] = useWatchlist();

  const apiKey = 'c79a7fb6';

  useEffect(() => {
    if (searchTerm.trim()) {
      setLoading(true);
      setError('');
      fetchMovies(apiKey, searchTerm)
        .then(setMovies)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="border-2 rounded-lg border-red-600 text-white py-10 px-5 mb-8">
        <div className="container mx-auto text-left">
          <h1 className="text-4xl font-bold mb-4 text-black">Welcome to <span className='text-red-600'>Watchlists</span></h1>
          <p className="text-lg text-black">
           Browse movies, add them to watchlists and share them with friends.
          </p><br/>
          <p className="text-lg text-black">
           Just click to add  a movie the poster to see more details to mark the movies as watched
          </p>
        </div>
      </section>

      <div className="container mx-auto mb-8 px-5">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500 text-lg">{error}</p>}

      <div className="container mx-auto grid grid-cols-7 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isInWatchlist={watchlist.some(item => item.imdbID === movie.imdbID)}
              toggleWatchlist={toggleWatchlist}
            />
          ))
        ) : (
          <p className="text-center col-span-3 text-lg">No movies found.</p>
        )}
      </div>

      <div className="container hidden mx-auto px-5 mt-10">
        <Watchlist watchlist={watchlist} />
      </div>
    </div>
  );
};

export default MovieHome;
