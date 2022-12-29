import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { BackLink } from '../components/BackLink/BackLink';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';

import { getMovieById } from '../components/API/Api';
import posterDefault from '../img/posterMovie.png';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const fotoUrl = 'https://image.tmdb.org/t/p/w300';

  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

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
        <h2>
          {movieDetails.title} (
          {movieDetails.release_date
            ? movieDetails.release_date.slice(0, 4)
            : ' No year'}
          )
        </h2>
        <p>
          User Score:{' '}
          {movieDetails.vote_average
            ? Math.floor(movieDetails.vote_average * 10).toFixed(0)
            : ''}
          %
        </p>
        <h3> Overview</h3>
        <p>{movieDetails.overview}</p>
        <h4>Genres</h4>
        <p>
          {movieDetails.genres
            ? movieDetails.genres.map(genre => genre.name).join(' ')
            : 'Genre not specified'}
        </p>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};
export default MovieDetails;
