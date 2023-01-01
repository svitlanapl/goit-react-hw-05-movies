import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';

import { GoBack } from 'components/GoBack/GoBack';
import { getMovieDetails } from 'servises/movieApi';
import { Loader } from 'components/Loader/Loader';

import defaultPoster from 'image/poster.png';

import {  Wrapper, Image, Title, Text, TitleOverview, Inform, Item} from './MovieDetails.styled';

const MovieDetails = () => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setDetails(movieDetails);
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
              details.poster_path
                ? `${BASE_IMG_URL}` + details.poster_path
                : defaultPoster
            }
            alt={details.title || details.name}
          />
        <div>
          <Title>
            {details.title} (
            {details.release_date
              ? details.release_date.slice(0, 4)
              : ' No year'}
            )
          </Title>
          <Text>
            User Score:{' '}
            {details.vote_average
              ? Math.floor(details.vote_average * 10).toFixed(0)
              : ''}
            %
          </Text>
          <TitleOverview> Overview</TitleOverview>
          <Text>{details.overview}</Text>
          <TitleOverview>Genres</TitleOverview>
          <Text>
            {details.genres
              ? details.genres.map(genre => genre.name).join(' ')
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
