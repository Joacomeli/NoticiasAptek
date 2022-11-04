import { useRoutes } from "react-router-dom";
import Login from "./views/login/Main";
import Administrador from "../views/administrador/Main";

function Router() {
  const { ProtectedRoute, NavigateFromRole } = useAuth();
  const routes = [
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <SideMenu />
        </ProtectedRoute>
      ),
      children: [
        {
            path: "",
            element: <NavigateFromRole />,
          },
        {
            path: "administrador",
            element: <Administrador />,
          },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
