import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar';
import { Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <AppBar />
      </Header>

      <main>
        {/* Suspense - рендеринг дочірніх компонентів лише за потреби*/}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
