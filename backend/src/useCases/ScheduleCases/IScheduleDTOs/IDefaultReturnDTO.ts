import { Schedule } from "../../../entities/Schedules";

interface IDefaultReturnDTO { 
    schedules: Array<Schedule>, 
    total_schedules: number 
};

export { IDefaultReturnDTO }