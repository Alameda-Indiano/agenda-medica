import { IResponseListDoctorsDTOs } from "../../useCases/Doctor/IDoctorsDTOs/IResponseListDoctorsDTOs";

export interface IDoctorRepository {

    list(): Promise<IResponseListDoctorsDTOs>
    
};
