import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getMovieCredits } from 'servises/movieApi';
import defaultPoster from 'image/poster.png';

import { CastList, CastItem, CastImage, CastText } from './Cast.styled';

const Cast = () => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const movieCast = await getMovieCredits(movieId);

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
    <CastList>
      {movieCast.map(cast => (
        <CastItem key={cast.id}>
          <CastImage
            src={
              cast.profile_path ? BASE_URL + cast.profile_path : defaultPoster
            }
            alt={cast.name}
          />
          <CastText>{cast.name}</CastText>
          <CastText>Character: {cast.character} </CastText>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;

