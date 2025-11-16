import HomePage from "@/home/pages/HomePage";
import { createBrowserRouter, Navigate } from "react-router";
import { AuthenticatedRoute, NotAuthenticatedRoute } from "./custom/ProtectedRoutes";
import LoginPage from "@/auth/pages/LoginPage";
import RegisterPage from "@/auth/pages/RegisterPage";
import PokemonPage from "@/pokemon/pages/PokemonPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <NotAuthenticatedRoute>
        <HomePage />
      </NotAuthenticatedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <NotAuthenticatedRoute>
        <LoginPage />
      </NotAuthenticatedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <NotAuthenticatedRoute>
        <RegisterPage />
      </NotAuthenticatedRoute>
    ),
  },
  {
    path: '/pokemon-api',
    element: (
        <AuthenticatedRoute>
            <PokemonPage/>
        </AuthenticatedRoute>
    )
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
