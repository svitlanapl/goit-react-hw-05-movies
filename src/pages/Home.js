import { useEffect, useState } from 'react';

import { MovieList } from '../components/MovieList/MovieList';
import { getMovies } from '../components/API/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await getMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};
export default Home;
