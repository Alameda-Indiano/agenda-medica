import { Sequelize } from "sequelize";
import { AppController } from "./AppController";
import { InitializeModels } from "./database/InitializeModels";

let connectionDatabase: Sequelize;

( async () => {
    
    try {

        const initializeModels = new InitializeModels();
        const app = new AppController(initializeModels);

        const { 
            server, 
            connection
        } = await app.execute("PRD");

        connectionDatabase = connection;

        server.listen(process.env.PORT || 8080, () => {
            console.log(`Servidor rodando na porta ${process.env.PORT || 8080}`);
        });

    } catch (error) {
        throw new Error(`Unable to connect to the database: ${error}`)
    };

})()

export { connectionDatabase };
