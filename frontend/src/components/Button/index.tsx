import { FC } from 'react';
import * as styled from './styled';

export const Button: FC<{ children: string, eventClick: () => void, width: string }> = ({children, eventClick, width}) => {

    return (
        <styled.Button width={width} onClick={() => { eventClick() }} >
            {children}
        </styled.Button>
    )

};