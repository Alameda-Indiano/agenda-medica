import { FC, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SchendulesContext } from '../../../context/SchendulesContext';
import { DashboardRepository } from '../../../repositories/DashboardRepository/in-database/DashboardRepositoryInDatabase';
import { IDataItemSchedule, IDataSchedules } from '../../../useCases/Schendules/ISchendulesDTOs/IResponseSchendules';
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

export const FormCreateSchendules: FC = () => {

    const dashboardRepository = new DashboardRepository();
    const schendulesCreateService = new SchendulesCreateService(dashboardRepository);

    const navigate = useNavigate();

    const initialDataSchendulesCreate = {
        doctor_id: 1,
        name: '',
        patient_id: 1,
        schedule_date: new Date()
    };

    const { dataSchendules } = useContext(SchendulesContext);

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
                                dataSchendules.schedules?.map((item: IDataItemSchedule) => (
                                    <Option key={item.doctor.id} value={item.doctor_id} >{item.doctor.name}</Option>
                                ))
                            }
                        </Select>
                        <Select value={dataSchendulesCreate.patient_id} onChange={(e) => setDataSchendulesCreate({ ...dataSchendulesCreate, patient_id: e.target.value })}  >
                            {
                                dataSchendules.schedules?.map((item: IDataItemSchedule) => (
                                    <Option key={item.patient.id} value={item.patient_id} >{item.patient.name}</Option>
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