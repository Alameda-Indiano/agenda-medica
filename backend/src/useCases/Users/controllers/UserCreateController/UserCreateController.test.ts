import { Sequelize } from "sequelize";
import { AppController } from "../../../../AppController";
import { Database } from "../../../../database/config/Database";
import request from "supertest";
import { InitializeModels } from "../../../../database/InitializeModels";
import { Express } from "express";
import { IRequestCreateUserDTO } from "../../IUserDTOs";
import { v4 as uuid } from "uuid";

describe('Controle de Criação de Usuário - CreateUserController', () => {

    let connectionDatabase: Sequelize;
    let appServer: Express;

    beforeAll(async () => {
        
        try {
            const initializeModels = new InitializeModels();
            const appController = new AppController(initializeModels);
    
            const { 
                server, 
                connection
            } = await appController.execute("PRD");

            connectionDatabase = connection;
            appServer = server;

            return connectionDatabase;
        } catch (error) {
            throw new Error(`Unable to connect to the database: ${error}`)
        };

    });

    afterAll(async () => {
        
        try {
            await Database.disconnect(connectionDatabase);
        } catch (error) {
            throw error;
        };

    });

    it('Deve ser possível criar um novo usuário ao consultar a rota "/User" passando os parametros esperados', async () => {

        const dataUser = {
            name: 'Usuário de Teste',
            username: 'User123',
            email: `${uuid()}@gmail.com`,
            password: "User123456789"
        };

        const res = await request(appServer)
        .post('/User')
        .send(dataUser);

        expect(res.status).toBe(201);
        expect(res.body.value).toHaveProperty('id');

    });

    it('Não deve ser possível criar um novo usuário ao consultar a rota "/User" passando os parametros esperados', async () => {
        
        const dataUser = {
            name: 'Usuário de Teste',
            username: 'User123',
            email: `${uuid()}@gmail.com`,
            password: "User123456789"
        };

        await request(appServer)
        .post('/User')
        .send(dataUser);

        const res = await request(appServer)
        .post('/User')
        .send(dataUser);

        expect(res.status).toBe(409)
        expect(res.body.statusCode).toBe(409)
        expect(res.body.message).toBe("User Already Exists!")

    });

    it('Caso ocorra um erro deve retornar as propriedades esperadas', async () => {
        
        const dataUser = {
            name: 'Usuário de Teste',
            username: 'User123',
            email: `${uuid()}@gmail.com`,
            password: "User123456789"
        };

        await request(appServer)
        .post('/User')
        .send(dataUser);

        const res = await request(appServer)
        .post('/User')
        .send(dataUser);

        expect(res.body).toHaveProperty('statusCode')
        expect(res.body).toHaveProperty('message')

    });

});