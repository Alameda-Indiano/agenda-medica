import { Patient } from "../../entities/Patients";

interface IPatientRepository {
    create(patient: Patient): Promise<Patient>;
    exists(email: string): Promise<boolean>;
};

export { IPatientRepository };
