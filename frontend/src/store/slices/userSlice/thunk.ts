import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserLoginDTO } from '../../../useCases/User/IUserDTOs/UserLogin/IUserLoginDTO';
import { UserLoginService } from '../../../useCases/User/services/UserLoginService/UserLoginService';
import { UsersRepositoryInDatabase } from '../../../repositories/UserRepository/in-database/UsersRepositoryInDatabase';

const usersRepositoryInDatabase = new UsersRepositoryInDatabase();
const userLoginService = new UserLoginService(usersRepositoryInDatabase);

export const signIn = createAsyncThunk('userLogin', async ({ email, password }: IUserLoginDTO, thunkAPI) => {

    const response = await userLoginService.login({ email, password });
    return response.data;

});