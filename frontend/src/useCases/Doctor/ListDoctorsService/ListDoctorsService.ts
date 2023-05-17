import { IDoctorRepository } from "../../../repositories/DoctorRepository/IDoctorRepository";
import { IResponseListDoctorsDTOs } from "../IDoctorsDTOs/IResponseListDoctorsDTOs";

export class ListDoctorsService {

    private _response: IResponseListDoctorsDTOs | null;

    constructor(
        private doctorRepository: IDoctorRepository
    ){
        this._response = null;
    };

    public async get(): Promise<IResponseListDoctorsDTOs> {

        try {
            
            const response = await this.doctorRepository.list();
            this._response = response;

        } catch (error) {
            console.error(error);
        };

        return this._response as IResponseListDoctorsDTOs;

    };

};