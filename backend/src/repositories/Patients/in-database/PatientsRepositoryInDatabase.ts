import { PatientsModel } from "../../../database/models/Patients/PatientsModel";
import { Patient } from "../../../entities/Patients";
import { IPatientRepository } from "../IPatientsRepositories";

class PatientRepositoryInDatabase implements IPatientRepository {

    async create({ name, email, age, sex }: Patient): Promise<Patient> {
        const patient = await PatientsModel.create({ name, email, age, sex, status: "Ativo" });
        return patient as Patient;
    };

    async exists(email: string): Promise<boolean> {
        const patient = await PatientsModel.findOne({ where: { email } });
        return !!patient;
    };

    async list(): Promise<Array<Patient>> {
        const patient = await PatientsModel.findAll();
        return patient as Array<Patient>
    };

};

export { PatientRepositoryInDatabase };