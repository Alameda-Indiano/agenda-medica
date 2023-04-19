import { ITemplateLauncher } from "./IModels";
import { UserModel } from "./User/UserModel";
import { UserTemplateLauncher } from "./User/UserTemplateLauncher";

interface IModels {
    UserModel: typeof UserModel;
};

const models: Array<ITemplateLauncher> = [
    UserTemplateLauncher
];

export { IModels, models };