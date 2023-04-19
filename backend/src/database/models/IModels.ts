import { IModels } from "./Models";

interface ITemplateLauncher {
    init: (sequelize: any) => void;
    associate?: (models: IModels) => void;
}[];

export { ITemplateLauncher };