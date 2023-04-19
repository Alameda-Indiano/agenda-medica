import { Sequelize } from "sequelize";
import { models } from "./models/Models";

class InitializeModels {

    private init(connectionDatabase: Sequelize) {
        models.forEach((model) => model.init(connectionDatabase));
    };

    private associate(connectionDatabase: Sequelize) {
        models.forEach((model: any) => {
            if (model.associate) {
                model.associate(connectionDatabase.models);
            };
        });
    };

    execute(connectionDatabase: Sequelize) {
        this.init(connectionDatabase);
        this.associate(connectionDatabase);
    };
};

export { InitializeModels };