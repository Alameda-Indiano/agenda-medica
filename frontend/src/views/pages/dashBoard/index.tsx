import { FC, useEffect } from 'react';
import { AlignItemsCenter } from '../../assets/styles/AlignItemsCenter';
import { BannerBackground } from '../../assets/styles/BannerBackground';
import { Section } from '../../assets/styles/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import * as styled from './styled';

import DataGrid, {
    Column,
    Grouping,
    Scrolling,
    Paging,
    SearchPanel,
} from 'devextreme-react/data-grid';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { searchSchenduleDate } from '../../../store/slices/scheanduleSlice/thunk';

export const DashBoard: FC = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { schedules, total_schedules, total_schedules_canceled } = useAppSelector((state) => state.scheandule);

    useEffect(() => {
        dispatch(searchSchenduleDate({ period: "Month" }))
    }, []);

    return (
        <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <styled.DashBoard>
                        <styled.DashBoardHeader>
                            <styled.ContainerIndicators>
                                <styled.Indicators>
                                    <span>{total_schedules}</span>
                                    <h1>Total de Atendimentos (Hoje)</h1>
                                </styled.Indicators>
                                <styled.Indicators>
                                    <span>{total_schedules_canceled}</span>
                                    <h1 >Atendimentos Cancelados (Hoje)</h1>
                                </styled.Indicators>
                            </styled.ContainerIndicators>
                            <Button width='25%' eventClick={() => { navigate('/formcreateschendules') }} >Adicionar</Button>
                        </styled.DashBoardHeader>
                        <DataGrid
                            dataSource={schedules}
                            height="100%"
                            width="100%"
                            showBorders={true}
                            remoteOperations={true}
                            wordWrapEnabled={true}
                        >
                            <Scrolling mode="virtual" rowRenderingMode="virtual" />
                            <Paging defaultPageSize={100} />
                            <SearchPanel visible={true} highlightCaseSensitive={true} />
                            <Grouping autoExpandAll={false} />

                            <Column dataField="doctor.name" dataType="string" groupIndex={0} />
                            <Column dataField="patient.name" dataType="string" groupIndex={1} />

                            <Column dataField="name" dataType="string" />
                            <Column dataField="schedule_date" alignment='center' dataType="datetime" />
                            <Column dataField="status" alignment='center' dataType="string" />

                        </DataGrid>
                    </styled.DashBoard>
                </AlignItemsCenter>
            </Section>
        </BannerBackground>
    )

};