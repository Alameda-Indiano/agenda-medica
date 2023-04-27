import { IDashboardRepository } from '../../../repositories/DashboardRepository/IDashboardRepository';
import { IGetByPeriod } from '../ISchendulesDTOs/IGetByPeriod';
import { IResponseSchendules } from '../ISchendulesDTOs/IResponseSchendules';

export class GetByPeriodService {

    private _response: IResponseSchendules | null;

    constructor(
        private dashboardRepository: IDashboardRepository
    ){
        this._response = null;
    };

    public async get({ period }: IGetByPeriod): Promise<IResponseSchendules> {

        try {
            
            const response = await this.dashboardRepository.getByPeriod({ period });
            this._response = response;

        } catch (error) {
            console.error(error);
        };

        return this._response as IResponseSchendules;

    };

};