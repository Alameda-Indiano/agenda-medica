import { FC } from 'react';
import { AlignItemsCenter } from '../../assets/styles/AlignItemsCenter';
import { BannerBackground } from '../../assets/styles/BannerBackground';
import { Section } from '../../assets/styles/Section';
import { Header } from '../../components/Header';
import * as styled from './styled';

import Scheduler from 'devextreme-react/scheduler';
import { data } from './test';

export const Agenda: FC = () => {

    return (
        <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <styled.Agenda>
                        <Scheduler
                            editing={false}
                            timeZone="America/Sao_Paulo"
                            dataSource={data}
                            views={['day', 'week', 'month']}
                            currentView="day"
                            width="100%"
                            height="100%">
                        </Scheduler>
                    </styled.Agenda>
                    
                </AlignItemsCenter>
            </Section>
        </BannerBackground>
    )

};