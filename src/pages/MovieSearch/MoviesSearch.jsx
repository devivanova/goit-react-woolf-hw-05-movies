import React, { useEffect, useState } from 'react';
import { getMovieSearch } from 'services/moviesAPI';
import Error from 'components/Error/Error';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error',
};

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchText) {
      return;
    }
    setStatus(Status.LOADING);
    getMovieSearch(searchText)
      .then(movies => {
        setMovies(movies);
        setStatus(Status.RESOLVE);
      })
      .catch(error => {
        setMovies([]);
        setError(error);
        setStatus(Status.ERROR);
      });
  }, [searchText]);

  const onChangeQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      {status === 'loading' && <Loader />}
      {status === Status.RESOLVE && <MoviesList movies={movies} />}
      {status === Status.ERROR && <Error error={error} />}
    </>
  );
};

export default MoviesSearch;