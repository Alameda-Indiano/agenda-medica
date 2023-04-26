import { Either, error, sucess } from "../../../../shared/ErrorHandling/Either";
import { ParametersError } from "../../../../shared/ErrorHandling/ParametersError";
import { PasswordValidate } from "../../../../shared/utils/PasswordValidate";

class Password {

    private constructor(
        private readonly password: string | Password
    ){
        this.password = password;
        Object.freeze(this);
    };

    static create(password: string, confirmPassWord: string): Either<ParametersError,Password> {

        if (password.trim().length === 0) return error(new ParametersError('É necessário informar uma senha para continuar!'));
        else if (!PasswordValidate(password)) return error(new ParametersError('A senha não segue o padrão esperado! (Um número, uma letra maiúscula e um caractere especial)'));
        else if (password !== confirmPassWord) return error(new ParametersError('As senhas não conhecidem!'))
        else return sucess(new Password(password));

    };

    get value() {
        return this.password as Password;
    };

};

export { Password };