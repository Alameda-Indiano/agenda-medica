import { ScheduleRepositoryInDatabase } from "../../repositories/Schedules/in-database/SchedulesRepositoryInDatabase";
import { IScheduleRepository } from "../../repositories/Schedules/ISchedulesRepositories";

import { CreateScheduleService } from "./services/ScheduleCreateService";
import { CreateScheduleController } from "./controllers/ScheduleCreateController";

import { FilterSchedulesByPeriodService } from "./services/FilterSchedulesByPeriodService";
import { FilterSchedulesByPeriodController } from "./controllers/FilterSchedulesByPeriodController";

import { FilterSchedulesByStatusService } from "./services/FilterSchedulesByStatusService";
import { FilterSchedulesByStatusController } from "./controllers/FilterSchedulesByStatusController";

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
        const filterSchedulesByPeriodService = new FilterSchedulesByPeriodService(this.scheduleRepository);
        const filterSchedulesByPeriodController = new FilterSchedulesByPeriodController(filterSchedulesByPeriodService);
        return filterSchedulesByPeriodController;
    };

    filterStatus() {
        const filterSchedulesByStatusService = new FilterSchedulesByStatusService(this.scheduleRepository);
        const filterSchedulesByStatusController = new FilterSchedulesByStatusController(filterSchedulesByStatusService);
        return filterSchedulesByStatusController;
    };

};

export const ScheduleFactory = new ScheduleModule();