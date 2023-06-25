import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />

      {/* Suspense - рендеринг дочірніх компонентів лише за потреби*/}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
