import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from 'components/GlobalStyle';

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import NotFound from 'pages/NotFound';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </div>
  );
};
