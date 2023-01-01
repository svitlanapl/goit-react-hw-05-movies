import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { GoBack } from 'components/GoBack/GoBack';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';
import defaultPoster from 'image/poster.png';

import { getMovieDetails } from 'servises/movieApi';
import { Loader } from 'components/Loader/Loader';

import {  Wrapper, Image, Title, Text, TitleOverview, Inform,  Item} from './MovieDetails.styled';

const MovieDetails = () => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      <GoBack to={goBack}>Go back</GoBack>
      <Wrapper>
          <Image
            src={
              movieDetails.poster_path
                ? BASE_IMG_URL + movieDetails.poster_path
                : defaultPoster
            }
            alt={movieDetails.title || movieDetails.name}
          />
        <div>
          <Title>
            {movieDetails.title} (
            {movieDetails.release_date
              ? movieDetails.release_date.slice(0, 4)
              : ' No year'}
            )
          </Title>
          <Text>
            User Score:{' '}
            {movieDetails.vote_average
              ? Math.floor(movieDetails.vote_average * 10).toFixed(0)
              : ''}
            %
          </Text>
          <TitleOverview> Overview</TitleOverview>
          <Text>{movieDetails.overview}</Text>
          <TitleOverview>Genres</TitleOverview>
          <Text>
            {movieDetails.genres
              ? movieDetails.genres.map(genre => genre.name).join(' ')
              : 'Sorry genre not found.'}
          </Text>
        </div>
      </Wrapper>
      <Inform>
        <Title>Additional information</Title>
        <ul>
          <Item>
            <Link to="cast">Cast</Link>
          </Item>
          <Item>
            <Link to="reviews">Reviews</Link>
          </Item>
        </ul>
      </Inform>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
