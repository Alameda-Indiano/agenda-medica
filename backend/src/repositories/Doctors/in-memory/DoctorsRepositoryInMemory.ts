import { Doctor } from "../../../entities/Doctors";
import { IDoctorRepository } from "../IDoctorsRepositories";
import { v4 as uuid } from 'uuid';

class DoctorsRepositoryInMemory implements IDoctorRepository {

    private doctors: Array<Doctor> = [];

    async create(doctor: Doctor): Promise<Doctor> {
        Object.assign(doctor, {
            id: uuid()
        });

        this.doctors.push(doctor);
        return doctor;
    };

    async exists(email: string): Promise<boolean> {
        const doctor = this.doctors.some((doctor) => doctor.email.value as any === email);
        return doctor;
    };

};

export { DoctorsRepositoryInMemory };