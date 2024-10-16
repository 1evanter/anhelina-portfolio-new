import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <footer></footer>
    </>
  );
};
