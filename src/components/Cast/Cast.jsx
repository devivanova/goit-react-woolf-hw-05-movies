import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/moviesAPI';
import { Loader } from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import deafaultImg from '../../images/default-image.png';
import { CastItem, CastList, ImgWrapper, InfoWrapper } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error',
};

const Cast = () => {
  const [movieCast, setMovieCast] = useState();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus(Status.LOADING);
    getMovieCredits(movieId)
      .then(data => {
        setMovieCast(data.cast);
        setStatus(Status.RESOLVE);
      })
      .catch(error => {
        setMovieCast({});
        setError(error);
        setStatus(Status.ERROR);
      });
  }, [movieId]);

  return (
    <section>
      {status === Status.RESOLVE && movieCast && movieCast.length > 0 ? (
        <div>
          <CastList>
            {movieCast.map(
              ({ credit_id, profile_path, original_name, character }) => (
                <CastItem key={credit_id}>
                  <ImgWrapper>
                    <img
                      src={
                        profile_path
                          ? `${BASE_IMG_URL}${profile_path}`
                          : deafaultImg
                      }
                      alt={original_name}
                    />
                  </ImgWrapper>
                  <InfoWrapper>
                    <h4>{original_name}</h4>
                    <p>Character: {character}</p>
                  </InfoWrapper>
                </CastItem>
              )
            )}
          </CastList>
        </div>
      ) : (
        status !== Status.LOADING && <p>Sorry, there isn't any actors' info</p>
      )}
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <Error>{error}</Error>}
    </section>
  );
};

export default Cast;