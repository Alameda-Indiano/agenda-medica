import { IGetByPeriod } from "../../useCases/Schendules/ISchendulesDTOs/IGetByPeriod";
import { IResponseSchendules } from "../../useCases/Schendules/ISchendulesDTOs/IResponseSchendules";
import { IGetByStatus } from "../../useCases/Schendules/ISchendulesDTOs/IGetByStatus";
import { ISchendulesCreate } from "../../useCases/Schendules/ISchendulesDTOs/ISchendulesCreate";

export interface IDashboardRepository {

    getByPeriod({ period }: IGetByPeriod): Promise<IResponseSchendules>;
    getByStatus({ status }: IGetByStatus): Promise<IResponseSchendules>;
    create({ doctor_id, name, patient_id, schedule_date }: ISchendulesCreate): Promise<IResponseSchendules>;
    
};
