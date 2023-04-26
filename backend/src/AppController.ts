import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import { Routes } from './routes';
import { InitializeModels } from './database/InitializeModels';
import { Database, TypeEnvironment } from './database/config/Database';

class AppController {

    private declare server: Express;

    constructor(
        private initializeModels: InitializeModels
    ) {};

    private middlewares() {
        this.server.use(express.json());
        this.server.use(cors({
            methods: ['GET', 'POST', 'DELETE', 'PUT'],
            origin: '*',
            allowedHeaders: 'Content-Type, Authorization',
            optionsSuccessStatus: 204
        }));
    };

    private routes() {
        Routes.forEach(route => {
            this.server.use(route)
        });
    };

    private async connectDatabase(Environment: TypeEnvironment) {
        const connectionDatabase = await Database.connect(Environment);
        this.initializeModels.execute(connectionDatabase);
        return { connectionDatabase };
    };

    async execute(Environment: TypeEnvironment) {
        this.server = express();
        this.middlewares();
        this.routes();

        const { 
            connectionDatabase 
        } = await this.connectDatabase(Environment);

        return { 
            connection: connectionDatabase, 
            server: this.server 
        };
    };

};

export { AppController };