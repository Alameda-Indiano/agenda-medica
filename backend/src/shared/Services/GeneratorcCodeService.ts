import crypto from 'crypto';

//min
interface ICodeExpiresIn {
    expiresMin: number
};

interface IResCodeExpiresIn {
    codeExpiresIn: Date,
    code: string
};

class GeneratorcCodeService {

    constructor(){};

    public execute({ expiresMin }: ICodeExpiresIn): IResCodeExpiresIn {

        const currentDate = new Date();

        const code = crypto.randomBytes(4).toString("hex");
        const codeExpiresIn = new Date(currentDate.setMinutes(currentDate.getMinutes() + expiresMin));

        return {
            codeExpiresIn,
            code
        };
        
    };

};

export {
    GeneratorcCodeService
};