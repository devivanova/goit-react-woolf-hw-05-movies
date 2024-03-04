import React from 'react';
import { ImgWrapper, InfoWrapper, MovieInfoWrapper } from './MovieInfo.styled';
import defaultImg from '../../images/default-image.png';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieInfo = ({
  details: {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    name,
    genres = [],
  },
}) => {
  return (
    <MovieInfoWrapper>
      <ImgWrapper>
        <img
          src={poster_path ? BASE_IMG_URL + poster_path : defaultImg}
          alt={title || name}
          style={{ width: '100%', height: '100%' }}
        />
      </ImgWrapper>
      <InfoWrapper>
        <h2>
          {title || name}
          {release_date ? ` (${release_date.slice(0, 4)})` : ''}
        </h2>
        <p>
          User Score: {vote_average ? `${Math.round(vote_average * 10)}%` : '-'}
        </p>
        <h3>Overview</h3>
        <p>{overview || 'no info'}</p>
        <h3>Genres</h3>
        {genres && <span>{genres.map(genre => genre.name).join(' | ')}</span>}
      </InfoWrapper>
    </MovieInfoWrapper>
  );
};

export default MovieInfo;