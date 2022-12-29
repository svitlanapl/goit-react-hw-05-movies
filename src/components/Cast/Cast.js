import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import posterDefault from 'img/posterMovie.png';
import { getCast } from '../API/Api';

const Cast = () => {
  const fotoUrl = 'https://image.tmdb.org/t/p/w300';

  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const movieCast = await getCast(movieId);

        setMovieCast(movieCast);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <ul>
      {movieCast.map(cast => (
        <li key={cast.id}>
          <img
            src={
              cast.profile_path ? fotoUrl + cast.profile_path : posterDefault
            }
            alt={cast.name}
            width={100}
          />
          <p>{cast.name}</p>
          <p>Character: {cast.character} </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
