import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
          // maxWidth: 960, margin: '0 auto', padding: '0 16px'
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};
