import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts/App.layout';
import { LoadingSpinner } from './components/ui/loading-spinner';
import './App.css';
import { ThemeProvider } from './components/theme-provider';

const LandingPage = lazy(() => import('./pages/landing.page'));
const OnBoarding = lazy(() => import('./pages/on-boarding.page'));

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
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
