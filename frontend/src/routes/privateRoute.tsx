import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { refreshToken } from "../store/slices/userSlice";

export const PrivateRoute = () => {

    const dispatch = useAppDispatch();
    const { isLogged } = useAppSelector((state) => state.user);

    if (!isLogged) {
        
        const jwt = localStorage.getItem("@Auth:token");

        if (!!jwt) dispatch(refreshToken({ jwt }));

        return isLogged ? <Outlet /> : <Navigate to="/" />;

    } else return <Outlet />;
    
};