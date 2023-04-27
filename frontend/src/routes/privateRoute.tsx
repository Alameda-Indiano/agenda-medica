import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthUserContext } from "../context/AuthContext";

export const PrivateRoute = () => {
  
    const { loggedUser } = useContext(AuthUserContext);

    return loggedUser ? <Outlet /> : <Navigate to="/" />;
};