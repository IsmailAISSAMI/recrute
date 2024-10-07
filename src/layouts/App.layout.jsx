import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div>
      app-layout
      <Outlet />
    </div>
  );
}
