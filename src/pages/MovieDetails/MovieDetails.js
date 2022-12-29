import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { BackLink } from '../../components/BackLink/BackLink';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';

import { getMovieById } from '../../components/API/Api';
import posterDefault from '../../img/posterMovie.png';
import { Loader } from 'components/Loader/Loader';
import {
  ItemInform,
  Paragraph,
  TitleMovie,
  TitleOverview,
  Wrapper,
  WrapperInform,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const fotoUrl = 'https://image.tmdb.org/t/p/w300';

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await getMovieById(movieId);

        setMovieDetails(movieDetails);
      } catch (error) {
        toast(error.message);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLink}>Go back</BackLink>
      <Wrapper>
        <div>
          <img
            src={
              movieDetails.poster_path
                ? fotoUrl + movieDetails.poster_path
                : posterDefault
            }
            width={300}
            alt={movieDetails.title}
          />
        </div>

        <div>
          <TitleMovie>
            {movieDetails.title} (
            {movieDetails.release_date
              ? movieDetails.release_date.slice(0, 4)
              : ' No year'}
            )
          </TitleMovie>
          <Paragraph>
            User Score:{' '}
            {movieDetails.vote_average
              ? Math.floor(movieDetails.vote_average * 10).toFixed(0)
              : ''}
            %
          </Paragraph>
          <TitleOverview> Overview</TitleOverview>
          <Paragraph>{movieDetails.overview}</Paragraph>
          <TitleOverview>Genres</TitleOverview>
          <Paragraph>
            {movieDetails.genres
              ? movieDetails.genres.map(genre => genre.name).join(' ')
              : 'Genre not specified'}
          </Paragraph>
        </div>
      </Wrapper>
      <WrapperInform>
        <TitleMovie>Additional information</TitleMovie>
        <ul>
          <ItemInform>
            <Link to="cast">Cast</Link>
          </ItemInform>
          <ItemInform>
            <Link to="reviews">Reviews</Link>
          </ItemInform>
        </ul>
      </WrapperInform>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
