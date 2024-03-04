import styled from 'styled-components';

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 100px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 24px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const MovieItem = styled.li`
  border-radius: 10px;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  > img {
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  font-size: 18px;
  padding: 10px;
  overflow: hidden;
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
  padding-top: 10px 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  height: auto;
  object-fit: cover;
`;