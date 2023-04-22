import { ScheduleRepositoryInDatabase } from "../../repositories/Schedules/in-database/SchedulesRepositoryInDatabase";
import { IScheduleRepository } from "../../repositories/Schedules/ISchedulesRepositories";
import { PeriodFilterGenerator } from "../../shared/Services/PeriodFilterGenerator";

import { CreateScheduleService } from "./services/ScheduleCreateService";
import { CreateScheduleController } from "./controllers/ScheduleCreateController";

import { FilterSchedulesByPeriodService } from "./services/FilterSchedulesByPeriodService";
import { FilterSchedulesByPeriodController } from "./controllers/FilterSchedulesByPeriodController";

import { FilterSchedulesByStatusService } from "./services/FilterSchedulesByStatusService";
import { FilterSchedulesByStatusController } from "./controllers/FilterSchedulesByStatusController";

import { FilterSchedulesByDoctorAndPeriodService } from "./services/FilterSchedulesByDoctorAndPeriodService";
import { FilterSchedulesByDoctorAndPeriodController } from "./controllers/FilterSchedulesByDoctorAndPeriodController";

class ScheduleModule {

    private scheduleRepository: IScheduleRepository;
    private periodFilterGenerator: PeriodFilterGenerator

    constructor() {
        this.scheduleRepository = new ScheduleRepositoryInDatabase();
        this.periodFilterGenerator = new PeriodFilterGenerator();
    };

    create() {
        const createSchedule = new CreateScheduleService(this.scheduleRepository);
        const createScheduleController = new CreateScheduleController(createSchedule);
        return createScheduleController;
    };

    filterByPeriod() {
        const filterSchedulesByPeriodService = new FilterSchedulesByPeriodService(this.scheduleRepository, this.periodFilterGenerator);
        const filterSchedulesByPeriodController = new FilterSchedulesByPeriodController(filterSchedulesByPeriodService);
        return filterSchedulesByPeriodController;
    };

    filterStatus() {
        const filterSchedulesByStatusService = new FilterSchedulesByStatusService(this.scheduleRepository);
        const filterSchedulesByStatusController = new FilterSchedulesByStatusController(filterSchedulesByStatusService);
        return filterSchedulesByStatusController;
    };

    filterDoctorByPediod() {
        const filterSchedulesByDoctorAndPeriodService = new FilterSchedulesByDoctorAndPeriodService(this.scheduleRepository, this.periodFilterGenerator);
        const filterSchedulesByDoctorAndPeriodController = new FilterSchedulesByDoctorAndPeriodController(filterSchedulesByDoctorAndPeriodService);
        return filterSchedulesByDoctorAndPeriodController;
    };

};

export const ScheduleFactory = new ScheduleModule();