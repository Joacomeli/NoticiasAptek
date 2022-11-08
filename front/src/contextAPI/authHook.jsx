import { createContext, useContext, useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { React } from "react";
const AuthContext = createContext();
//import { AuthContext } from './components/authContext.js';


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    navigate("/gestion");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

   const ProtectedRoute = ({ children }) => {
   
    if (!user) {
      // user is not authenticated
      return <Navigate to="/login" />;
    }
    return children;
  };


  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      ProtectedRoute
    }),
    [user, login, logout, ProtectedRoute]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};