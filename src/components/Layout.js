import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          marginTop: 100,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={3000} />
      </div>
    </>
  );
};
