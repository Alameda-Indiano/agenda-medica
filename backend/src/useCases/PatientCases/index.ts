import { PatientRepositoryInDatabase } from "../../repositories/Patients/in-database/PatientsRepositoryInDatabase";
import { IPatientRepository } from "../../repositories/Patients/IPatientsRepositories";
import { CreatePatientController } from "./controllers/PatientCreateController";
import { CreatePatientService } from "./services/PatientCreateService";

class PatientModule {

    private patientRepository: IPatientRepository;

    constructor() {
        this.patientRepository = new PatientRepositoryInDatabase();
    };

    create() {
        const createPatient = new CreatePatientService(this.patientRepository);
        const createPatientController = new CreatePatientController(createPatient);
        return createPatientController;
    };

};

export const PatientFactory = new PatientModule();