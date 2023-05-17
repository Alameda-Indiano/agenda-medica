import { DoctorsModel } from "../../../database/models/Doctors/DoctorsModel";
import { Doctor } from "../../../entities/Doctors";
import { IDoctorRepository } from "../IDoctorsRepositories";

class DoctorsRepositoryInDatabase implements IDoctorRepository {

    async create({ name, email }: Doctor): Promise<Doctor> {
        const doctor = await DoctorsModel.create({ name, email });
        return doctor as Doctor;
    };

    async exists(email: string): Promise<boolean> {
        const doctor = await DoctorsModel.findOne({ where: { email } });
        return !!doctor;
    };

    async list(): Promise<Array<Doctor>> {
        const doctor = await DoctorsModel.findAll();
        return doctor as Array<Doctor>;
    };

};

export { DoctorsRepositoryInDatabase };