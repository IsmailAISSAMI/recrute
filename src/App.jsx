import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts/App.layout';
import { LoadingSpinner } from './components/ui/loading-spinner';
import './App.css';
import { ThemeProvider } from './components/theme-provider';

const LandingPage = lazy(() => import('./pages/landing.page'));
const Onboarding = lazy(() => import('./pages/onboarding.page'));
const JobListings = lazy(() => import('./pages/job-listings.page'));
const JobDetails = lazy(() => import('./pages/job-details.page'));
const PostJob = lazy(() => import('./pages/post-job.page'));
const SavedJobs = lazy(() => import('./pages/saved-jobs.page'));
const MyJobs = lazy(() => import('./pages/my-jobs.page'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/onboarding', element: <Onboarding /> },
      { path: '/jobs', element: <JobListings /> },
      { path: '/jobs/:id', element: <JobDetails /> },
      { path: '/jobs/post', element: <PostJob /> },
      { path: '/jobs/saved', element: <SavedJobs /> },
      { path: '/jobs/my', element: <MyJobs /> },
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
