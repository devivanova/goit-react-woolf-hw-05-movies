import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import defaultImg from '../../images/default-image.png';
import {
  ImgWrapper,
  InfoWrapper,
  MovieItem,
  MovieList,
  MoviePoster,
  MovieTitle,
} from './MoviesList.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(
        ({
          id,
          title,
          name,
          poster_path,
          original_title,
          vote_average,
          release_date,
        }) => (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            <MovieItem>
              <ImgWrapper>
                <MoviePoster
                  src={poster_path ? BASE_IMG_URL + poster_path : defaultImg}
                  alt={title || name}
                />
              </ImgWrapper>
              <InfoWrapper>
                <MovieTitle>
                  {original_title || title || name}
                  {release_date ? ` (${release_date.slice(0, 4)})` : ''}
                </MovieTitle>
                <p>
                  Raiting:{' '}
                  {vote_average ? `${Math.round(vote_average * 10)}%` : '-'}
                </p>
              </InfoWrapper>
            </MovieItem>
          </Link>
        )
      )}
    </MovieList>
  );
}

export default MoviesList;