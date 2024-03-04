import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AddInfoSection = styled.div`
  margin: 20px 0px;
  display: flex;
  gap: 20px;
`;

export const AddInfoName = styled.h3`
  display: inline-block;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const InfoLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #8c4faf;
  font-weight: 500;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const BackBtn = styled(Link)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 8px 8px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  &:hover,
  &:active,
  &:focus {
    color: #8c4faf;
    cursor: pointer;
  }
`;