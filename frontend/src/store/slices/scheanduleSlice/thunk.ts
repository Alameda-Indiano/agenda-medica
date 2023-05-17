import { createAsyncThunk } from '@reduxjs/toolkit';
import { DashboardRepository } from '../../../repositories/DashboardRepository/in-database/DashboardRepositoryInDatabase';
import { GetByStatusService } from '../../../useCases/Schendules/GetByStatusService/GetByStatusService';
import { GetByPeriodService } from '../../../useCases/Schendules/GetByPeriodService/GetByPeriodService';
import { IGetScheanduleState } from './IScheanduleState';

const dashboardRepository = new DashboardRepository();
const getByStatusService = new GetByStatusService(dashboardRepository);
const getByPeriodService = new GetByPeriodService(dashboardRepository);

export const searchSchenduleDate = createAsyncThunk('searchSchenduleDate', async ({ period }: IGetScheanduleState) => {

    try {

        const responseByStatus = await getByStatusService.get({ status: 'Cancelado' });
        const responseByPeriod = await getByPeriodService.get({ period });

        return { 
            responseByStatus: responseByStatus.data.value.total_schedules, 
            responseByPeriod: responseByPeriod.data.value
        };

    } catch (error) {
        console.log(error);
    };

});