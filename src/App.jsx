import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts/App.layout';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import './App.css';

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

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
