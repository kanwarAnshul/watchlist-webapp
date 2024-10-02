import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const MovieCard = ({ movie, isInWatchlist, toggleWatchlist }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer relative"
      onClick={() => toggleWatchlist(movie)}
    >
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
        alt={movie.Title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{movie.Title}</h2>
        <p className="text-sm text-gray-500">Release Year: {movie.Year}</p>
        <p className="text-sm text-gray-500">Type: {movie.Type}</p>
      </div>
      <div className="absolute top-2 right-2">
        {isInWatchlist ? (
          <AiFillHeart className="text-red-500" size={24} />
        ) : (
          <AiOutlineHeart className="text-gray-500" size={24} />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
