import { FC } from 'react';
import * as styled from './styled';

export const Button: FC<{ children: string, eventClick: () => void }> = ({children, eventClick}) => {

    return (
        <styled.Button onClick={() => { eventClick() }} >
            {children}
        </styled.Button>
    )

};