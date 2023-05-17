import { IPatientRepository } from "../../../repositories/PatientRepository/IPatientRepository";
import { IResponseListPatientDTOs } from "../IPatientsDTOs/IResponseListPatientDTOs";

export class ListPatientsService {

    private _response: IResponseListPatientDTOs | null;

    constructor(
        private patientRepository: IPatientRepository
    ){
        this._response = null;
    };

    public async get(): Promise<IResponseListPatientDTOs> {

        try {
            
            const response = await this.patientRepository.list();
            this._response = response;

        } catch (error) {
            console.error(error);
        };

        return this._response as IResponseListPatientDTOs;

    };

};