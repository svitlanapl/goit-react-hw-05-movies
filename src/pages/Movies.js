import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { searchMovies } from '../components/API/Api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function getImage() {
      setLoading(true);
      try {
        const movies = await searchMovies(searchQuery);
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
      {movies && <MovieList movies={movies} />}
    </div>
  );
};
export default Movies;

// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

// import { searchMovies } from '../components/API/Api';
// import { SearchBox } from 'components/SearchBox/SearchBox';
// import { MovieList } from 'components/MovieList/MovieList';
// import { Loader } from 'components/Loader/Loader';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query');

//   useEffect(() => {
//     if (!query) {
//       return;
//     }

//     async function getImage() {
//       setLoading(true);
//       try {
//         const movies = await searchMovies(query);
//         setMovies(movies);
//       } catch (error) {
//         toast(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getImage();
//   }, [query]);

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     setSearchParams({ query: form.elements.query.value });
//     form.reset();
//     return;
//   };

//   return (
//     <div>
//       {loading && <Loader/>}
//       <SearchBox onSubmit={handleSubmit} />
//       {query && <MovieList movies={movies} />}
//     </div>
//   );
// };
// export default Movies;
