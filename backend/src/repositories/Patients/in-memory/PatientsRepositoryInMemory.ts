import { Patient } from "../../../entities/Patients";
import { IPatientRepository } from "../IPatientsRepositories";
import { v4 as uuid } from 'uuid';

class PatientsRepositoryInMemory implements IPatientRepository {

    private patients: Array<Patient> = [];

    async create(patient: Patient): Promise<Patient> {
        Object.assign(patient, {
            id: uuid()
        });

        this.patients.push(patient);
        return patient;
    };

    async exists(email: string): Promise<boolean> {
        const patient = this.patients.some((patient) => patient.email.value as any === email);
        return patient;
    };

};

export { PatientsRepositoryInMemory };