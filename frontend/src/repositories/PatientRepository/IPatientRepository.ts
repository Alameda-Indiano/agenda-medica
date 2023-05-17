import { IResponseListPatientDTOs } from "../../useCases/Patient/IPatientsDTOs/IResponseListPatientDTOs";

export interface IPatientRepository {

    list(): Promise<IResponseListPatientDTOs>
    
};
