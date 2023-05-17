import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from './IUserState';
import { signIn } from './thunk';
import { connectionAPI } from '../../../database/axios';

const initialState: IUserState = {
    isLogged: false
};

interface IRefreshToken { jwt: string }

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        singOut: (state) => {

            localStorage.removeItem("@Auth:token");
            state.isLogged = false;

        },
        refreshToken: (state, action: PayloadAction<IRefreshToken>) => {
            
            const { jwt } = action.payload;

            localStorage.setItem("@Auth:token", jwt);
            connectionAPI.defaults.headers.common["Authorization"] = `${jwt}`;
            state.isLogged = true;

        }
    },
    extraReducers(builder) {

        builder.addCase(signIn.fulfilled, (state, action) => {

            if (action.payload.statusCode === 200) {
                
                const { jwt } = action.payload.value;
                
                localStorage.setItem("@Auth:token", jwt);
                connectionAPI.defaults.headers.common["Authorization"] = `${jwt}`;
                state.isLogged = true;

            } else {
                state.isLogged = false;
            }

        });



    },
});

export const UserReducer = UserSlice.reducer;
export const { refreshToken, singOut } = UserSlice.actions;