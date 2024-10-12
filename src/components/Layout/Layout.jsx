import { Navigation } from 'components/Home/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer></footer>
    </>
  );
};
