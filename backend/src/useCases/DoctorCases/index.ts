import { DoctorsRepositoryInDatabase } from "../../repositories/Doctors/in-database/DoctorsRepositoryInDatabase";
import { IDoctorRepository } from "../../repositories/Doctors/IDoctorsRepositories";
import { CreateDoctorController } from "./controllers/DoctorCreateController";
import { CreateDoctorService } from "./services/DoctorCreateService";

class DoctorModule {

    private doctorRepository: IDoctorRepository;

    constructor() {
        this.doctorRepository = new DoctorsRepositoryInDatabase();
    };

    public create(): CreateDoctorController {

        const createDoctor = new CreateDoctorService(this.doctorRepository);
        const createDoctorController = new CreateDoctorController(createDoctor);
        return createDoctorController;
        
    };

};

export const DoctorFactory = new DoctorModule();