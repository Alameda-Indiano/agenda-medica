import { IDashboardRepository } from '../../../repositories/DashboardRepository/IDashboardRepository';
import { IGetByStatus } from '../ISchendulesDTOs/IGetByStatus';
import { IResponseSchendules } from '../ISchendulesDTOs/IResponseSchendules';

export class GetByStatusService {

    private _response: IResponseSchendules | null;

    constructor(
        private dashboardRepository: IDashboardRepository
    ){
        this._response = null;
    };

    public async get({ status }: IGetByStatus): Promise<IResponseSchendules> {

        try {
            
            const response = await this.dashboardRepository.getByStatus({ status });
            this._response = response;

        } catch (error) {
            console.error(error);
        };

        return this._response as IResponseSchendules;

    };

};