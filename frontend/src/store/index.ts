import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from './slices/userSlice';
import { ScheanduleReducer } from './slices/scheanduleSlice';

export const Store = configureStore({
    reducer: {
        user: UserReducer,
        scheandule: ScheanduleReducer
    }
});

export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof Store.getState>> = useSelector; 