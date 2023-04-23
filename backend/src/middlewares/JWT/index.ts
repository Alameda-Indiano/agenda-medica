import { GeneratorJwtService } from "../../shared/Services/GeneratorJwtService";
import { VerifyToken } from "./VerifyToken";

class JWT {

    private generatorJwtService: GeneratorJwtService;

    constructor(){
        this.generatorJwtService = new GeneratorJwtService();
    };

    public verify() {
        const verifyToken = new VerifyToken(this.generatorJwtService);
        return verifyToken;
    };

};

export const JWTFactory = new JWT();