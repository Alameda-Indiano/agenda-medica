import { IPatientRepository } from '../../../../repositories/Patients/IPatientsRepositories';
import { Patient } from '../../../../entities/Patients';
import { ICreatePatientDTO } from '../../IPatientDTOs/ICreatePatientDTO';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { IResponseSucess } from '../../../../shared/ErrorHandling/ParametersSucess/IResponseSucess';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';

class CreatePatientService {

    declare private _patient: Patient;

    constructor(
        private patientsRepository: IPatientRepository
    ) {};

    async execute({ name, email, age, sex }: ICreatePatientDTO): Promise<Either<ParametersError, IResponseSucess<Patient>>> {
        
        const patientAlreadyExists = await this.patientsRepository.exists(email);

        if (!!patientAlreadyExists) return error(new ParametersError('Patient Already Exists!', statuscode.CONFLICT));

        const newPatient = Patient.create({ name, email, age, sex });

        if (newPatient.isException()) {
            const { statusCode, message } = newPatient.exception;
            return error(new ParametersError(message, statusCode));
        };

        if (newPatient.isSucess()) {

            let { name, email, age, sex } = newPatient.sucess;

            const patient = await this.patientsRepository.create({ name, email, age, sex });

            if (!patient) return error(new ParametersError('Error registering patient!', statuscode.BAD_REQUEST));
    
            this._patient = patient;
        };

        return sucess(
            new ParametersSucess('Usuário cadastrado com sucesso', statuscode.CREATED,  this._patient)
        );
         
    };

};

export { CreatePatientService };