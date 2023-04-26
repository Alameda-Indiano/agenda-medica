export interface IUserResetPasswordResponseDTO {
    data: {
        message: string;
        statusCode: number;
        value: {
            jwt: string;
        };
    };
};