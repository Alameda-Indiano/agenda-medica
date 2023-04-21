import { PatientsModel } from "../../../database/models/Patients/PatientsModel";
import { Patient } from "../../../entities/Patients";
import { IPatientRepository } from "../IPatientsRepositories";

class PatientRepositoryInDatabase implements IPatientRepository {

    async create({ name, email, age, sex }: Patient): Promise<Patient> {
        const patient = await PatientsModel.create({ name, email, age, sex });
        return patient as Patient;
    };

    async exists(email: string): Promise<boolean> {
        const patient = await PatientsModel.findOne({ where: { email } });
        return !!patient;
    };

};

export { PatientRepositoryInDatabase };