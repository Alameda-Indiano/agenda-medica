import { IDoctorRepository } from '../../../../repositories/Doctors/IDoctorsRepositories';
import { Doctor } from '../../../../entities/Doctors';
import { Either, error, sucess } from '../../../../shared/ErrorHandling/Either';
import { ParametersError } from '../../../../shared/ErrorHandling/ParametersError';
import { ParametersSucess } from '../../../../shared/ErrorHandling/ParametersSucess';
import { statuscode } from '../../../../shared/interfaces/StatusCode';

class DoctorListService {

    constructor(
        private doctorRepository: IDoctorRepository
    ) {};

    async execute(): Promise<Either<ParametersError, ParametersSucess<Array<Doctor>>>> {

        const doctor = await this.doctorRepository.list();

        if (!doctor) return error(new ParametersError('Error registering doctor!', statuscode.BAD_REQUEST));

        return sucess(
            new ParametersSucess('Lista de doutores', statuscode.OK,  doctor)
        );
         
    };

};

export { DoctorListService };