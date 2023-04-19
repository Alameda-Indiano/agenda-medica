import { ParametersSucess } from ".";

describe('Classe para parametrizar os sucessos das chamadas - ParametersSucess', () => {

    it('Dentro da propriedade "value" deve conter as propriedades definidas na interface dessa classe', () => {

        const statusCodeTeste = 201;
        const messageTeste = 'Sucesso';
        
        interface ITeste {
            mensagemDeSucesso: string;
        };

        const { value } = new ParametersSucess<ITeste>( messageTeste, statusCodeTeste, { mensagemDeSucesso: 'Teste' } );

        expect(value).toHaveProperty('mensagemDeSucesso');

    });
    
    it('A classe deve sempre retornar os parametros "value, message e statusCode"', () => {

        const statusCodeTeste = 201;
        const messageTeste = 'Sucesso';
        
        interface ITeste {
            mensagemDeSucesso: string;
        };

        const res = new ParametersSucess<ITeste>( messageTeste, statusCodeTeste, { mensagemDeSucesso: 'Teste' } );

        expect(res).toHaveProperty('value');
        expect(res).toHaveProperty('message');
        expect(res).toHaveProperty('statusCode');

    });

        
    it('A mensagem retornada e o status devem ser iguais os definidos ao instanciar essa classe', () => {

        const statusCodeTeste = 201;
        const messageTeste = 'Sucesso';
        
        interface ITeste {
            mensagemDeSucesso: string;
        };

        const { message, statusCode } = new ParametersSucess<ITeste>( messageTeste, statusCodeTeste, { mensagemDeSucesso: 'Teste' } );

        expect(message).toBe(messageTeste);
        expect(statusCode).toBe(statusCodeTeste);

    });

});