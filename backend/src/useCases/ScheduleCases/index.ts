import { ScheduleRepositoryInDatabase } from "../../repositories/Schedules/in-database/SchedulesRepositoryInDatabase";
import { IScheduleRepository } from "../../repositories/Schedules/ISchedulesRepositories";
import { PeriodFilterGeneratorService } from "../../shared/Services/PeriodFilterGeneratorService";

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
    private periodFilterGeneratorService: PeriodFilterGeneratorService

    constructor() {
        this.scheduleRepository = new ScheduleRepositoryInDatabase();
        this.periodFilterGeneratorService = new PeriodFilterGeneratorService();
    };

    create() {
        const createSchedule = new CreateScheduleService(this.scheduleRepository);
        const createScheduleController = new CreateScheduleController(createSchedule);
        return createScheduleController;
    };

    filterByPeriod() {
        const filterSchedulesByPeriodService = new FilterSchedulesByPeriodService(this.scheduleRepository, this.periodFilterGeneratorService);
        const filterSchedulesByPeriodController = new FilterSchedulesByPeriodController(filterSchedulesByPeriodService);
        return filterSchedulesByPeriodController;
    };

    filterStatus() {
        const filterSchedulesByStatusService = new FilterSchedulesByStatusService(this.scheduleRepository);
        const filterSchedulesByStatusController = new FilterSchedulesByStatusController(filterSchedulesByStatusService);
        return filterSchedulesByStatusController;
    };

    filterDoctorByPediod() {
        const filterSchedulesByDoctorAndPeriodService = new FilterSchedulesByDoctorAndPeriodService(this.scheduleRepository, this.periodFilterGeneratorService);
        const filterSchedulesByDoctorAndPeriodController = new FilterSchedulesByDoctorAndPeriodController(filterSchedulesByDoctorAndPeriodService);
        return filterSchedulesByDoctorAndPeriodController;
    };

};

export const ScheduleFactory = new ScheduleModule();