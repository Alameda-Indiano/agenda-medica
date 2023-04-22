import { ScheduleRepositoryInDatabase } from "../../repositories/Schedules/in-database/SchedulesRepositoryInDatabase";
import { IScheduleRepository } from "../../repositories/Schedules/ISchedulesRepositories";

import { CreateScheduleService } from "./services/ScheduleCreateService";
import { CreateScheduleController } from "./controllers/ScheduleCreateController";

import { SchedulesByPeriodService } from "./services/SchedulesByPeriodService";
import { FilterSchedulesByPeriodController } from "./controllers/FilterSchedulesByPeriodController";

import { SchedulesByStatusService } from "./services/SchedulesByStatusService";
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
        const schedulesByPeriodService = new SchedulesByPeriodService(this.scheduleRepository);
        const filterSchedulesByPeriodController = new FilterSchedulesByPeriodController(schedulesByPeriodService);
        return filterSchedulesByPeriodController;
    };

    filterStatus() {
        const schedulesByStatusService = new SchedulesByStatusService(this.scheduleRepository);
        const filterSchedulesByStatusController = new FilterSchedulesByStatusController(schedulesByStatusService);
        return filterSchedulesByStatusController;
    };

};

export const ScheduleFactory = new ScheduleModule();