import { lazy, Suspense } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts/App.layout';

const LandingPage = lazy(() => import('./pages/Landing.page'));
const OnBoarding = lazy(() => import('./pages/OnBoarding.page'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/onboarding', element: <OnBoarding /> },
    ],
  },
]);

// Loader Component for Suspense
const LoadingSpinner = () => {
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={'animate-spin'}
  >
    <path d='M21 12a9 9 0 1 1-6.219-8.56' />
  </svg>;
};

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
