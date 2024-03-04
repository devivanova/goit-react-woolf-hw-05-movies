import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px 40px 40px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #8c4faf;
  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 36px;
  padding: 8px 16px;
  text-decoration: none;
  color: #8c4faf;
  font-weight: 800;
  &.active {
    text-decoration: underline;
    text-underline-position: 2px;
  }
`;

export const ErrorInfo = styled.p`
  text-align: left;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid grey;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
`;