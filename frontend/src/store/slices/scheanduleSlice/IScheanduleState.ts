import { IDataSchedules } from "../../../useCases/Schendules/ISchendulesDTOs/IResponseSchendules";

export interface IGetScheanduleState {
    period: 'Today' | 'Week' | 'Month';
};

export interface IScheanduleState extends IDataSchedules { 
    total_schedules_canceled: number 
}