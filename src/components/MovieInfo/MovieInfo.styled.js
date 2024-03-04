import styled from 'styled-components';

export const MovieInfoWrapper = styled.div`
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
  gap: 30px;
`;

export const ImgWrapper = styled.div`
  border-radius: 6px;
  min-width: 400px;
  overflow: hidden;
  position: relative;
  > img {
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;