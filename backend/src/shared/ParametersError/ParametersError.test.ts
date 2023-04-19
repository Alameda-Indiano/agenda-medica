import { ParametersError } from ".";

describe('Classe para parametrizar possíveis erros - ParametersError', () => {

    it('Deve ser possível acessar os dados de saída e esses devem ser iguais os dados de entrada', () => {

        const statusCodeTeste = 404;
        const messageTeste = 'Novo Erro';

        const { statusCode, message } = new ParametersError( messageTeste, statusCodeTeste );

        expect(statusCode).toBe(statusCodeTeste);
        expect(message).toBe(messageTeste);

    });

    it('Deve existir as propriedades "statusCode" e "message"', () => {

        const statusCodeTeste = 404;
        const messageTeste = 'Novo Erro';

        const response = new ParametersError( messageTeste, statusCodeTeste );

        expect(response).toHaveProperty("statusCode");
        expect(response).toHaveProperty("message");

    });

});