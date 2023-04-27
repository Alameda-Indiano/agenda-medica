export interface IUserLoginResponseDTO {
    data: {
        message: string;
        statusCode: number;
        value: {
            jwt: string
        }
    };
};