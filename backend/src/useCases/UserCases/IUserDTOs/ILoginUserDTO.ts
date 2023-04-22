interface ILoginUserDTO {
    email: string;
    password: string;
};

interface IResponseLoginUser {
    jwt: string
};

export {
    ILoginUserDTO,
    IResponseLoginUser
};