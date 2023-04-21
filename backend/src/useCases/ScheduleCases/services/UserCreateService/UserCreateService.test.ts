import { CreateUserService } from ".";
import { UsersRepositoryInMemory } from "../../../../repositories/Users/in-memory/UsersRepositoryInMemory";
import { v4 as uuid } from "uuid";

describe('Serviço de Criação de Usuário - UserCreateService', () => {
    
    let userRepository: UsersRepositoryInMemory;

    beforeAll(() => {
        userRepository = new UsersRepositoryInMemory();
    });

    it('Deve ser possível cadastrar uma novo usuário', async () => {

        const dataUser = {
            name: 'Usuário de Teste',
            username: 'User123',
            email: `${uuid()}@gmail.com`,
            password: "User123456789"
        };

        const createUser = new CreateUserService(userRepository);

        const user = await createUser.execute(dataUser);

        expect(user.isSucess()).toBe(true);

        if (user.isSucess()){
            expect(user.sucess.value).toHaveProperty('id');
        };

    });

    it('Não deve ser possível cadastrar um novo usuário caso já exista um usuário com o mesmo endereço de email', async () => {
        
        const dataUser = {
            name: 'Usuário de Teste',
            username: 'User123',
            email: `${uuid()}@gmail.com`,
            password: "User123456789"
        };

        const createUser = new CreateUserService(userRepository);

        await createUser.execute(dataUser);
        const res = await createUser.execute(dataUser);

        expect(res.isException()).toBe(true);

    });

    it('Caso exista um usuário com o mesmo endereço de email deve ser retornado o erro correto', async () => {
        
        const dataUser = {
            name: 'Usuário de Teste',
            username: 'User123',
            email: `${uuid()}@gmail.com`,
            password: "User123456789"
        };

        const createUser = new CreateUserService(userRepository);

        await createUser.execute(dataUser);
        const res = await createUser.execute(dataUser);

        if (res.isException()) {
            const { message, statusCode } = res.exception;

            expect(statusCode).toBe(409);
            expect(message).toBe('User Already Exists!');
        };

    });

    it('Caso ocorra um erro deve retornar as propriedades esperadas', async () => {

        const dataUser = {
            name: 'Usuário de Teste',
            username: 'User123',
            email: `${uuid()}@gmail.com`,
            password: "User123456789"
        };

        const createUser = new CreateUserService(userRepository);

        await createUser.execute(dataUser);
        const res = await createUser.execute(dataUser);

        expect(res).toHaveProperty('isException');

        if (res.isException()) {
            expect(res).toHaveProperty("exception");
            expect(res.exception).toHaveProperty("statusCode");
            expect(res.exception).toHaveProperty("message");
        };

    });

});