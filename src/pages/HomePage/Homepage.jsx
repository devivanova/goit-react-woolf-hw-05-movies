import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import { MovieListName } from './Homepage.styled';
const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <section>
      <MovieListName>Trending today</MovieListName>
      <MoviesList movies={movies} />
    </section>
  );
};

export default Homepage;