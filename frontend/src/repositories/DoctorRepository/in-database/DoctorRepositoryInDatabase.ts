import { IDoctorRepository } from "../IDoctorRepository";
import { connectionAPI } from '../../../database/axios';
import { IResponseListDoctorsDTOs } from "../../../useCases/Doctor/IDoctorsDTOs/IResponseListDoctorsDTOs";

class DoctorRepository implements IDoctorRepository {

    async list(): Promise<IResponseListDoctorsDTOs> {
        const response: IResponseListDoctorsDTOs = await connectionAPI.get(`/Doctor`);
        return response;  
    };

};

export { DoctorRepository };