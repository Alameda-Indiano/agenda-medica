import { createContext, useState, useEffect, FC } from "react";
import { Navigate } from "react-router-dom";
import { UsersRepositoryInDatabase } from "../repositories/UserRepository/in-database/UsersRepositoryInDatabase";
import { UserLoginService } from "../useCases/User/services/UserLoginService/UserLoginService";
import { connectionAPI } from "../database/axios";
import { IUserLoginDTO } from "../useCases/User/IUserDTOs/UserLogin/IUserLoginDTO";

export interface IAuthUser {
    signIn: ({ email, password }: IUserLoginDTO) => Promise<string | undefined>;
    singOut: () => void;
    refreshToken: (jwt: string) => void;
    loggedUser: boolean;
};

export const AuthUserContext = createContext<IAuthUser>({
    signIn: async ({ email, password }) => { return undefined },
    singOut: async () => null,
    refreshToken: (jwt) => null,
    loggedUser: false
});

export const AuthUserProvider: FC<{ children: any }> = ({ children }) => {

    const userRepository = new UsersRepositoryInDatabase();
    const userLoginService = new UserLoginService(userRepository);

    const [ loggedUser, setLoggedUser ] = useState(false);

    const signIn = async ({ email, password }: IUserLoginDTO): Promise<string | undefined> => {
       
        try {
            
            const { data: { message, value } } = await userLoginService.login({ email, password });

            localStorage.setItem("@Auth:token", value.jwt);
            connectionAPI.defaults.headers.common["Authorization"] = `Bearer ${value.jwt}`;
            setLoggedUser(true);
            return message;

        } catch (error) {
            console.log(error);
        };

    };

    const refreshToken = async (jwt: string) => {
       
        try {

            localStorage.setItem("@Auth:token", jwt);
            connectionAPI.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
            setLoggedUser(true);

        } catch (error) {
            console.log(error);
        };

    };

    const singOut = () => {
        localStorage.clear();
        setLoggedUser(false);
        return <Navigate to="/" />;
    };

    return (
        <AuthUserContext.Provider value={{ singOut, loggedUser, signIn, refreshToken }}>
            {children}
        </AuthUserContext.Provider>
    )
};
