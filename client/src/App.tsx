import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './MainLayout';
import HomePage from './pages/HomePage';
import RegisterPage from "./pages/RegisterPage";
import Login from "./Login/Presentation/Pages/Login";
import Logout from './Login/Presentation/Pages/Logout';
import GalleryPage from './pages/GalleryPage';
import ProfilePage from './pages/ProfilePage';
import PaymentGateway from './pages/PaymentGateway';
import PanelAdmin from './pages/PanelAdmin';
import ProtectedRoutes from './components/ProtectedRoutes';
import AdminRoute from './components/AdminRoute';
import Error from './components/Error';
import SimulateToken from './pages/SimulateToken';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
      errorElement: <Error />
    },
    {
      path: "/simulate-token",
      element: <SimulateToken />,
    },
    {
      path: "/login",
      element: (
        <MainLayout>
          <Login />
        </MainLayout>
      ),
      errorElement: <Error />
    },
    {
      path: "/register",
      element: (
        <MainLayout>
          <RegisterPage />
        </MainLayout>
      ),
      errorElement: <Error />
    },
    {
      path: "/gallery",
      element: (
        <MainLayout>
          <GalleryPage />
        </MainLayout>
      ),
      errorElement: <Error />
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/payment",
          element: (
            <MainLayout>
              <PaymentGateway />
            </MainLayout>
          ),
          errorElement: <Error />
        },
        {
          path: "/logout",
          element: (
            <MainLayout>
              <Logout />
            </MainLayout>
          ),
          errorElement: <Error />
        },
        {
          path: "/profile",
          element: (
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          ),
          errorElement: <Error />
        },
        {
          element: <AdminRoute />,
          children: [
            {
              path: "/admin",
              element: (
                <MainLayout>
                  <PanelAdmin />
                </MainLayout>
              ),
              errorElement: <Error />
            }
          ]
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;