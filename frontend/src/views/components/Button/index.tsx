import { FC } from 'react';
import * as styled from './styled';

export const Button: FC<{ children: string, eventClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, width: string }> = ({children, eventClick, width}) => {

    return (
        <styled.Button width={width} onClick={(e) => { eventClick(e) }} >
            {children}
        </styled.Button>
    )

};