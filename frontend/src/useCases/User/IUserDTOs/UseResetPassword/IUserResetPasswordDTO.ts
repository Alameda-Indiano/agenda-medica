export interface IUserResetPasswordDTO {
    email: string;
    code: string;
    password: string;
    confirmPassword: string;
};