import { FC } from 'react';
import { AlignItemsCenter } from '../../assets/styles/AlignItemsCenter';
import { BannerBackground } from '../../assets/styles/BannerBackground';
import { Section } from '../../assets/styles/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import * as styled from './styled';

import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Scrolling,
    Pager,
    Paging,
    TotalItem,
    Summary,
    SearchPanel,
} from 'devextreme-react/data-grid';
import { customers } from './test';

export const DashBoard: FC = () => {

    const teste = () => {

    }

    return (
        <BannerBackground ViewHeight={100} >
            <Header />
            <Section>
                <AlignItemsCenter>
                    <styled.DashBoard>
                        <styled.DashBoardHeader>
                            <styled.ContainerIndicators>
                                <styled.Indicators>
                                    <span>100</span>
                                    <h1>Total de Atendimentos (Hoje)</h1>
                                </styled.Indicators>
                                <styled.Indicators>
                                    <span style={{ background: 'transparent' }} >100</span>
                                    <h1 >Atendimentos Cancelados (Hoje)</h1>
                                </styled.Indicators>
                            </styled.ContainerIndicators>
                            <Button width='25%' eventClick={teste} >Adicionar</Button>
                        </styled.DashBoardHeader>
                        <DataGrid
                            dataSource={customers}
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
                            <Column dataField="CompanyName" dataType="string" />
                            <Column dataField="Phone" dataType="string" />
                            <Column dataField="Fax" dataType="string" />
                            <Column dataField="City" dataType="string" />
                            <Column dataField="State" dataType="string" groupIndex={0} />
                        </DataGrid>
                    </styled.DashBoard>
                    
                </AlignItemsCenter>
            </Section>
        </BannerBackground>
    )

};