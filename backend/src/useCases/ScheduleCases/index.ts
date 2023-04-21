import { ScheduleRepositoryInDatabase } from "../../repositories/Schedules/in-database/SchedulesRepositoryInDatabase";
import { IScheduleRepository } from "../../repositories/Schedules/ISchedulesRepositories";
import { CreateScheduleController } from "./controllers/ScheduleCreateController";
import { CreateScheduleService } from "./services/ScheduleCreateService";

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

};

export const ScheduleFactory = new ScheduleModule();