import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../appBar';


const Layout = () => {
  return (
    <>
      <header >
        <AppBar />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;