import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Header } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};