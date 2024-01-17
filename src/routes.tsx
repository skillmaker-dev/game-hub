import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ConfirmEmailPage from "./pages/ConfirmEmailPage";
import PrivateRoute from "./components/PrivateRoute";
import FavoritesPage from "./pages/FavoritesPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
  {
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/favorites",
        element: <FavoritesPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/confirmemail/:email",
    element: <ConfirmEmailPage />,
    errorElement: <ErrorPage />
  }
]);

export default router;
