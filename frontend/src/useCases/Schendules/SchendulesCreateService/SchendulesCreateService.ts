import { IDashboardRepository } from '../../../repositories/DashboardRepository/IDashboardRepository';
import { IResponseSchendules } from '../ISchendulesDTOs/IResponseSchendules';
import { ISchendulesCreate } from '../ISchendulesDTOs/ISchendulesCreate';

export class SchendulesCreateService {

    private _response: IResponseSchendules | null;

    constructor(
        private dashboardRepository: IDashboardRepository
    ){
        this._response = null;
    };

    public async create({ doctor_id, name, patient_id, schedule_date }: ISchendulesCreate): Promise<IResponseSchendules> {

        try {
            
            const response = await this.dashboardRepository.create({ doctor_id, name, patient_id, schedule_date });
            this._response = response;

        } catch (error) {
            console.error(error);
        };

        return this._response as IResponseSchendules;

    };

};