import { FC, useEffect, useState } from 'react';
import { AlignItemsCenter } from '../../assets/styles/AlignItemsCenter';
import { BannerBackground } from '../../assets/styles/BannerBackground';
import { Section } from '../../assets/styles/Section';
import { Header } from '../../components/Header';
import * as styled from './styled';

import Scheduler from 'devextreme-react/scheduler';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { IDataItemSchedule } from '../../../useCases/Schendules/ISchendulesDTOs/IResponseSchendules';
import { useAppDispatch, useAppSelector } from '../../../store';
import { searchSchenduleDate } from '../../../store/slices/scheanduleSlice/thunk';

export const Agenda: FC = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { schedules } = useAppSelector((state) => state.scheandule);

    const [ dataSchendulesFormatDevExtreme, setDataSchendulesFormatDevExtreme ] = useState<{ text: string; startDate: string; }[]>([])  
    
    useEffect(() => {
        dispatch(searchSchenduleDate({ period: "Today" }));
    }, []);

    useEffect(() => {

        const formatSchedules = schedules.map((item: IDataItemSchedule) => {

            const idate = new Date().getFullYear() - new Date(item.patient.age).getFullYear();
    
            return {
                text: `${item.patient.name} - ${idate} - ${item.patient.sex}`,
                startDate: item.schedule_date
            };
        });

        setDataSchendulesFormatDevExtreme(formatSchedules);

    }, [schedules]);

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
                            onCurrentViewChange={(val) => {
                                
                                switch (val) {
                                    case 'day':
                                        dispatch(searchSchenduleDate({ period: "Today" }));
                                        break;
                                    case 'week':
                                        dispatch(searchSchenduleDate({ period: "Week" }));
                                        break;
                                    case 'month':
                                        dispatch(searchSchenduleDate({ period: "Month" }));
                                        break;
                                };

                            }}
                            width="100%"
                            height="95%">
                        </Scheduler>
                    </styled.Agenda>
                    
                </AlignItemsCenter>
            </Section>
        </BannerBackground>
    )

};