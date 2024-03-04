import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from '../../services/moviesAPI';
import { Loader } from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error',
};
const Review = () => {
  const [movieReview, setMovieReview] = useState();
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus(Status.LOADING);
    getMovieReview(movieId)
      .then(data => {
        setMovieReview(data.results);
        setStatus(Status.RESOLVE);
      })
      .catch(error => {
        setMovieReview({});
        setError(error);
        setStatus(Status.ERROR);
      });
  }, [movieId]);
  return (
    <section>
      {status === Status.RESOLVE && movieReview && movieReview.length > 0 ? (
        <div>
          <ul>
            {movieReview.map(({ id, author, content }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        status !== Status.LOADING && (
          <p>Sorry, there isn't any review for this movie :(</p>
        )
      )}
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <Error>{error}</Error>}
    </section>
  );
};

export default Review;