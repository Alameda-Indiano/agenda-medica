import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardRepository } from '../../../repositories/DashboardRepository/in-database/DashboardRepositoryInDatabase';
import { ISchendulesCreate } from '../../../useCases/Schendules/ISchendulesDTOs/ISchendulesCreate';
import { SchendulesCreateService } from '../../../useCases/Schendules/SchendulesCreateService/SchendulesCreateService';
import { AlignItemsCenter } from '../../assets/styles/AlignItemsCenter';
import { BannerBackground } from '../../assets/styles/BannerBackground';
import { Inputs } from '../../assets/styles/Inputs';
import { Section } from '../../assets/styles/Section';
import { Option, Select } from '../../assets/styles/Select'
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { ListDoctorsService } from '../../../useCases/Doctor/ListDoctorsService/ListDoctorsService';
import { ListPatientsService } from '../../../useCases/Patient/ListPatientsService/ListPatientsService';
import { DoctorRepository } from '../../../repositories/DoctorRepository/in-database/DoctorRepositoryInDatabase';
import { PatientRepository } from '../../../repositories/PatientRepository/in-database/PatientRepositoryInDatabase';
import { IPatientData, IResponseListPatientDTOs } from '../../../useCases/Patient/IPatientsDTOs/IResponseListPatientDTOs';
import { IDoctorData, IResponseListDoctorsDTOs } from '../../../useCases/Doctor/IDoctorsDTOs/IResponseListDoctorsDTOs';

export const FormCreateSchendules: FC = () => {

    const dashboardRepository = new DashboardRepository();
    const doctorRepository = new DoctorRepository();
    const patientRepository = new PatientRepository();

    const schendulesCreateService = new SchendulesCreateService(dashboardRepository);
    const listDoctorsService = new ListDoctorsService(doctorRepository);
    const listPatientsService = new ListPatientsService(patientRepository);

    const navigate = useNavigate();

    const initialDataSchendulesCreate = {
        doctor_id: 1,
        name: '',
        patient_id: 1,
        schedule_date: new Date()
    };

    const [ dataSelect, setDataSelect ] = useState<{doctors: Array<IDoctorData>, patients: Array<IPatientData>}>()

    const listDoctorsAndPatients = async () => {

        const doctors = await listDoctorsService.get();
        const patients = await listPatientsService.get();

        setDataSelect({ doctors: doctors.data.value, patients: patients.data.value });
    };

    useEffect(() => {
        listDoctorsAndPatients();
    }, []);

    const [dataSchendulesCreate, setDataSchendulesCreate] = useState<ISchendulesCreate>(initialDataSchendulesCreate);

    const createNewSchendules = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault();

        try {

            const { data: { statusCode, message } } = await schendulesCreateService.create({
                doctor_id: dataSchendulesCreate.doctor_id,
                name: dataSchendulesCreate.name,
                patient_id: dataSchendulesCreate.patient_id,
                schedule_date: dataSchendulesCreate.schedule_date
            });

            alert(message)
            if (statusCode === 201) navigate(-1)

            setDataSchendulesCreate(initialDataSchendulesCreate);

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <Form title="Novo Agendamento" buttonReturn={true} buttonReturnEventClick={() => navigate(-1)} >
                        <Inputs value={dataSchendulesCreate.name} onChange={(e) => setDataSchendulesCreate({ ...dataSchendulesCreate, name: e.target.value })} type="text" placeholder="Nome" />
                        <Select value={dataSchendulesCreate.doctor_id} onChange={(e) => setDataSchendulesCreate({ ...dataSchendulesCreate, doctor_id: e.target.value })} >
                            {
                                dataSelect?.doctors?.map((item: IDoctorData) => (
                                    <Option key={item.id} value={item.id} >{item.name}</Option>
                                ))
                            }
                        </Select>
                        <Select value={dataSchendulesCreate.patient_id} onChange={(e) => setDataSchendulesCreate({ ...dataSchendulesCreate, patient_id: e.target.value })}  >
                            {
                                dataSelect?.patients?.map((item: IPatientData) => (
                                    <Option key={item.id} value={item.id} >{item.name}</Option>
                                ))
                            }
                        </Select>
                        <Inputs value={dataSchendulesCreate.schedule_date} onChange={(e) => setDataSchendulesCreate({ ...dataSchendulesCreate, schedule_date: e.target.value })} type="datetime-local" placeholder="Data" />
                        <Button width="90%" eventClick={createNewSchendules} >Enviar</Button>
                    </Form>
                </AlignItemsCenter>
            </Section>
        </BannerBackground>
    )
};