import { Outlet } from 'react-router-dom';
import Header from '@/components/header';

export function AppLayout() {
  return (
    <>
      <Header />
      <main className='min-h-screen container mx-auto px-4 py-6'>
        <Outlet />
      </main>
    </>
  );
}
