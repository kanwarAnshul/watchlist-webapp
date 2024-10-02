export const fetchMovies = async (apiKey, searchTerm) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
    const data = await response.json();
    if (data.Response === 'True') {
      return data.Search;
    } else {
      throw new Error(data.Error);
    }
  };
  