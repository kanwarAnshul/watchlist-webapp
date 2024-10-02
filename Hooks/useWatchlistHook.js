import { useState, useEffect } from 'react';

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  const toggleWatchlist = (movie) => {
    const updatedWatchlist = watchlist.some(item => item.imdbID === movie.imdbID)
      ? watchlist.filter(item => item.imdbID !== movie.imdbID)
      : [...watchlist, movie];

    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  return [watchlist, toggleWatchlist];
};
