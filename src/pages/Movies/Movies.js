import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Loader } from 'components/Loader/Loader';
import { getMoviesSearch } from 'servises/movieApi';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MovieCard } from 'components/MovieList/MovieList';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    setMovies([]);
    if (!searchQuery) {
      return;
    }

    async function getImage() {
      setLoading(true);
      try {
        const movies = await getMoviesSearch(searchQuery);
        setMovies(movies);
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    }
    getImage();
  }, [searchQuery]);

  const handleSubmit = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <div>
      {loading && <Loader />}
      <SearchBox onChange={handleSubmit} />
      {movies && <MovieCard movies={movies} />}
    </div>
  );
};
export default Movies;

