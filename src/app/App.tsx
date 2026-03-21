import { RouterProvider } from 'react-router';
import { router } from './routes';
import { TripProvider } from './context/TripContext';
import { UserProvider, useUser } from './context/UserContext';
import { Onboarding } from './components/Onboarding';

function AppContent() {
  const { profile } = useUser();
  if (!profile) return <Onboarding />;
  return <RouterProvider router={router} />;
}

export default function App() {
  return (
    <UserProvider>
      <TripProvider>
        <AppContent />
      </TripProvider>
    </UserProvider>
  );
}
