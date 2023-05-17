import { Doctor } from "../../entities/Doctors";

interface IDoctorRepository {
    create(user: Doctor): Promise<Doctor>;
    exists(email: string): Promise<boolean>;
    list(): Promise<Array<Doctor>>;
};

export { IDoctorRepository };
