import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { AppLayout } from './layouts/App.layout';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { ErrorFallback } from './components/ErrorFallback';
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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
