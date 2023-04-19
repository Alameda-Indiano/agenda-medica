import { IDataUser, User } from ".";

describe("Entidade de Usuário", () => {

    it("Deve ser possível cadastrar um novo usuário", () => {

        const dataUser: IDataUser = {
            name: "Teste",
            username: "Teste",
            email: "Teste@gmail.com",
            password: "Teste123"
        };

        const response = User.create(dataUser);

        expect(response.isSucess()).toBe(true)
        
        if (response.isSucess()) {
            expect(response.sucess).toHaveProperty("id")
        };

    });

    it("Deve ser possível cadastrar um novo usuário", () => {

        const dataUser: IDataUser = {
            name: "Teste",
            username: "Teste",
            email: "Teste@gmail.com",
            password: "Teste123"
        };

        const response = User.create(dataUser);

        expect(response.isSucess()).toBe(true)
        
        if (response.isSucess()) {
            expect(response.sucess).toHaveProperty("id")
        };

    });

});