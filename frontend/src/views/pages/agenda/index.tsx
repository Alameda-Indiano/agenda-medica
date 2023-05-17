import { FC, useContext, useEffect } from 'react';
import { AlignItemsCenter } from '../../assets/styles/AlignItemsCenter';
import { BannerBackground } from '../../assets/styles/BannerBackground';
import { Section } from '../../assets/styles/Section';
import { Header } from '../../components/Header';
import * as styled from './styled';

import Scheduler from 'devextreme-react/scheduler';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { SchendulesContext } from '../../../context/SchendulesContext';
import { IDataItemSchedule } from '../../../useCases/Schendules/ISchendulesDTOs/IResponseSchendules';

export const Agenda: FC = () => {

    const navigate = useNavigate();
    const { dataSchendules, searchSchenduleDate } = useContext(SchendulesContext);

    useEffect(() => {
        searchSchenduleDate();
    }, []);

    const dataSchendulesFormatDevExtreme =  dataSchendules.schedules.map((item: IDataItemSchedule) => {

        const idate = new Date().getFullYear() - new Date(item.patient.age).getFullYear();

        return {
            text: `${item.patient.name} - ${idate} - ${item.patient.sex}`,
            startDate: item.schedule_date
        };
    });

    console.log(dataSchendulesFormatDevExtreme)

    return (
        <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <styled.Agenda>
                    <Button width='95%' eventClick={() => { navigate('/formcreateschendules') }} >Adicionar</Button>
                        <Scheduler
                            editing={false}
                            timeZone="America/Sao_Paulo"
                            dataSource={dataSchendulesFormatDevExtreme}
                            views={['day', 'week', 'month']}
                            currentView="day"
                            width="100%"
                            height="95%">
                        </Scheduler>
                    </styled.Agenda>
                    
                </AlignItemsCenter>
            </Section>
        </BannerBackground>
    )

};