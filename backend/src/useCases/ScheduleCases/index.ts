import { ScheduleRepositoryInDatabase } from "../../repositories/Schedules/in-database/SchedulesRepositoryInDatabase";
import { IScheduleRepository } from "../../repositories/Schedules/ISchedulesRepositories";

import { CreateScheduleService } from "./services/ScheduleCreateService";
import { CreateScheduleController } from "./controllers/ScheduleCreateController";

import { SchedulesByPeriodService } from "./services/SchedulesByPeriodService";
import { FilterSchedulesByPeriodController } from "./controllers/FilterSchedulesByPeriodController";

class ScheduleModule {

    private scheduleRepository: IScheduleRepository;

    constructor() {
        this.scheduleRepository = new ScheduleRepositoryInDatabase();
    };

    create() {
        const createSchedule = new CreateScheduleService(this.scheduleRepository);
        const createScheduleController = new CreateScheduleController(createSchedule);
        return createScheduleController;
    };

    filterOfTheDay() {
        const schedulesByPeriodService = new SchedulesByPeriodService(this.scheduleRepository);
        const filterSchedulesByPeriodController = new FilterSchedulesByPeriodController(schedulesByPeriodService);
        return filterSchedulesByPeriodController;
    };

};

export const ScheduleFactory = new ScheduleModule();