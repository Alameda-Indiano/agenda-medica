import { IDashboardRepository } from "../IDashboardRepository";
import { connectionAPI } from '../../../database/axios';
import { IGetByPeriod } from "../../../useCases/Schendules/ISchendulesDTOs/IGetByPeriod";
import { IResponseSchendules } from "../../../useCases/Schendules/ISchendulesDTOs/IResponseSchendules";
import { IGetByStatus } from "../../../useCases/Schendules/ISchendulesDTOs/IGetByStatus";
import { ISchendulesCreate } from "../../../useCases/Schendules/ISchendulesDTOs/ISchendulesCreate";

class DashboardRepository implements IDashboardRepository {

    public async getByPeriod({ period }: IGetByPeriod): Promise<IResponseSchendules> {
    
        const response: IResponseSchendules = await connectionAPI.get(`/Schedule/ByPeriod/${period}`);
        return response;

    };

    public async getByStatus({ status }: IGetByStatus): Promise<IResponseSchendules> {

        const response: IResponseSchendules = await connectionAPI.get(`/Schedule/${status}`);
        return response;

    };

    public async create({ doctor_id, name, patient_id, schedule_date }: ISchendulesCreate): Promise<IResponseSchendules> {
    
        const response: IResponseSchendules = await connectionAPI.post(`/Schedule/`, { doctor_id, name, patient_id, schedule_date });
        return response;

    };

};

export { DashboardRepository };