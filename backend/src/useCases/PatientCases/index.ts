import { PatientRepositoryInDatabase } from "../../repositories/Patients/in-database/PatientsRepositoryInDatabase";
import { IPatientRepository } from "../../repositories/Patients/IPatientsRepositories";

import { CreatePatientController } from "./controllers/PatientCreateController";
import { CreatePatientService } from "./services/PatientCreateService";

import { PatientListController } from "./controllers/PatientListController";
import { PatientListService } from "./services/PatientListService";

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

    list() {
        const patientListService = new PatientListService(this.patientRepository);
        const patientListController = new PatientListController(patientListService);
        return patientListController;
    };

};

export const PatientFactory = new PatientModule();