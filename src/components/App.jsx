import { Routes, Route } from 'react-router-dom';

import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
// import NotFound from '../pages/NotFound';
// import MovieDetails from '../pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      {/* <Route path="/movies/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews " element={<Reviews />} />
      </Route> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
