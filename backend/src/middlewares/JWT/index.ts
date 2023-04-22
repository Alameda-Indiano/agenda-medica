import { VerifyToken } from "./VerifyToken";

class JWT {

    public verify() {
        const verifyToken = new VerifyToken();
        return verifyToken;
    };

};

export const JWTFactory = new JWT();