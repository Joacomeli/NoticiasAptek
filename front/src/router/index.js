import { useRoutes } from "react-router-dom";
import Noticia from "../views/noticia/Main";
import Administrador from "../views/administrador/Main";
import { LoginPage } from "../views/login/Main";
import { useAuth } from "../contextAPI/authHook";
import Gestion from "../views/gestion/Main";
import { React } from "react";

function Router() {
  const { ProtectedRoute } = useAuth();
  const routes = [
    {
      path: "/gestion",
      element: (
        <ProtectedRoute>
          <Gestion />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/noticia",
      element: <Noticia />,
    },
    {
      path: "/",
      element: <Administrador />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
