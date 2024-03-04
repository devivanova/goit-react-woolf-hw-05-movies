import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import React, { lazy } from 'react';

const Homepage = lazy(() => import('../pages/HomePage/Homepage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));
const MoviesSearch = lazy(() => import('pages/MovieSearch/MoviesSearch'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<MoviesSearch />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default App;