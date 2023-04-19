import { Sequelize, Options } from "sequelize";

export type TypeEnvironment = "DEV" | "HML" | "PRD";

class ConnectDatabase {

    private _configPRD: Options;
    private _configDEV: Options;
    private _configHML: Options;

    constructor() {

        this._configDEV = {
            dialect: 'postgres',
            host: process.env.DB_HOST_DEV as string,
            username: process.env.DB_USER_DEV as string,
            password: process.env.DB_PASS_DEV as string,
            database: process.env.DB_NAME_DEV as string,
            define: {
                timestamps: true, 
                underscored: true
            },
            logging: false
        };

        this._configHML = {
            dialect: 'postgres',
            host: process.env.DB_HOST_HML as string,
            username: process.env.DB_USER_HML as string,
            password: process.env.DB_PASS_HML as string,
            database: process.env.DB_NAME_HML as string,
            define: {
                timestamps: true, 
                underscored: true
            },
            logging: false
        };

        this._configPRD = {
            dialect: 'postgres',
            host: process.env.DB_HOST_PRD as string,
            username: process.env.DB_USER_PRD as string,
            password: process.env.DB_PASS_PRD as string,
            database: process.env.DB_NAME_PRD as string,
            define: {
                timestamps: true, 
                underscored: true
            },
            logging: false
        };

    };  

    async connect(Environment: TypeEnvironment) {
        const connectionDatabase = new Sequelize(this[`_config${Environment}`]);
        
        try {
            await connectionDatabase.authenticate();
        } catch (error) {
            throw new Error(`Unable to connect to database: ${error}`);
        };

        return connectionDatabase;
    };

    async disconnect(connectionDatabase: Sequelize) {

        try {
            const disconnectingDatabase = await connectionDatabase.close();
            return disconnectingDatabase;
        } catch (error) {
            throw new Error(`Unable to disconnect from database: ${error}`);
        };

    };

};

const Database = new ConnectDatabase();
export { Database };
