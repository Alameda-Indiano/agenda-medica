import { IPatientRepository } from '../../../../repositories/Patients/IPatientsRepositories';
import { Patient } from '../../../../entities/Patients';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';

class PatientListService {

    constructor(
        private patientsRepository: IPatientRepository
    ) {};

    async execute(): Promise<Either<ParametersError, ParametersSucess<Array<Patient>>>> {

        const patients = await this.patientsRepository.list();
        
        if (!patients) return error(new ParametersError('Error registering patient!', statuscode.BAD_REQUEST));

        return sucess(
            new ParametersSucess('List de usuários', statuscode.OK,  patients)
        );
         
    };

};

export { PatientListService };