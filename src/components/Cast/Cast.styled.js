import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 12px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const CastItem = styled.li`
  border-radius: 6px;
  width: 100%;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  height: 300px;
  > img {
    object-fit: cover;
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 10px;
  font-size: 18px;
  padding: 10px;
  overflow: hidden;
`;