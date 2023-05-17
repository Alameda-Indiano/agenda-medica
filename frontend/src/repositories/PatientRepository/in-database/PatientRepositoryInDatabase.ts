import { IPatientRepository } from "../IPatientRepository";
import { connectionAPI } from '../../../database/axios';
import { IResponseListPatientDTOs } from "../../../useCases/Patient/IPatientsDTOs/IResponseListPatientDTOs";

class PatientRepository implements IPatientRepository {

    async list(): Promise<IResponseListPatientDTOs> {
        const response: IResponseListPatientDTOs = await connectionAPI.get(`/Patient`);
        return response;  
    };

};

export { PatientRepository };