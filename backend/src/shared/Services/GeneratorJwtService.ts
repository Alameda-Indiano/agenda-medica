import jwt from "jsonwebtoken";

interface IParamsJWT {
    user_id: number
};

class GeneratorJwtService {

    constructor(){};

    public execute({ user_id }: IParamsJWT): string {

        const expiresIn = 1000 * 60 * 2.5 //Cinco minutos
        const secret = process.env.SECRET_JWT;

        return jwt.sign({ user_id }, secret as string, { expiresIn });
        
    };

};

export {
    GeneratorJwtService
};