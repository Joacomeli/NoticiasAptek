import React from "react";
import { useAuth } from "../../contextAPI/authHook";

export const Login = () => {
  const { login } = useAuth();

  return <button onClick={() => login()}>Login</button>;
};
