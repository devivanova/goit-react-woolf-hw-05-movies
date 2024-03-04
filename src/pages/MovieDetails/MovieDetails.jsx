import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/moviesAPI';
import { Loader } from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { BiArrowBack } from 'react-icons/bi';
import { AddInfoSection, BackBtn, InfoLink } from './MovieDetails.styled';

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error',
};

const MovieDetails = () => {
  const [details, setDetails] = useState();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  // console.log({ movieId });

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setStatus(Status.LOADING);
    getMovieDetails(movieId)
      .then(data => {
        setDetails(data);
        setStatus(Status.RESOLVE);
      })
      .catch(error => {
        setDetails({});
        setError(error);
        setStatus(Status.ERROR);
      });
  }, [movieId]);

  return (
    <div>
      <BackBtn to={backLinkRef.current} type="button">
        <BiArrowBack size="1.5em" />
        Go back
      </BackBtn>
      {details && <MovieInfo details={details} />}
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <Error>{error}</Error>}
      <AddInfoSection>
        <InfoLink to="cast" state={{ from: location?.state?.from ?? '/' }}>
          Cast
        </InfoLink>
        <InfoLink to="review" state={{ from: location?.state?.from ?? '/' }}>
          Reviews
        </InfoLink>
      </AddInfoSection>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;