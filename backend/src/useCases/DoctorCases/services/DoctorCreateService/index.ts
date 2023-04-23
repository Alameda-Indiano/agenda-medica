import { IDoctorRepository } from '../../../../repositories/Doctors/IDoctorsRepositories';
import { Doctor } from '../../../../entities/Doctors';
import { ICreateDoctorDTO } from '../../IDoctorDTOs/ICreateDoctorDTO';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';

class CreateDoctorService {

    declare private _doctor: Doctor;

    constructor(
        private doctorRepository: IDoctorRepository
    ) {};

    async execute({ name, email }: ICreateDoctorDTO): Promise<Either<ParametersError, ParametersSucess<Doctor>>> {
        
        const doctorAlreadyExists = await this.doctorRepository.exists(email);

        if (!!doctorAlreadyExists) return error(new ParametersError('Doctor Already Exists!', statuscode.CONFLICT));

        const newDoctor = Doctor.create({ name, email });

        if (newDoctor.isException()) {
            const { statusCode, message } = newDoctor.exception;
            return error(new ParametersError(message, statusCode));
        };

        if (newDoctor.isSucess()) {

            let { name, email } = newDoctor.sucess;

            const doctor = await this.doctorRepository.create({ name, email });

            if (!doctor) return error(new ParametersError('Error registering doctor!', statuscode.BAD_REQUEST));
    
            this._doctor = doctor;
        };

        return sucess(
            new ParametersSucess('Médico cadastrado com sucesso!', statuscode.CREATED,  this._doctor)
        );
         
    };

};

export { CreateDoctorService };