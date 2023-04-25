import { FC } from 'react'
import * as styled from './styled';

export const Form: FC<{ children: any, img?: string, title: string }> = ({children, img, title}) =>{

    return (
        <styled.Form action="">
            {   img ? 
                <styled.ContainerFormImage>
                    <img src={img} alt="" />
                </styled.ContainerFormImage>
                : '' 
            }
            <styled.ContainerFormItems InitialWidth={ img ? '55%' : '100%' } >
                <styled.ContainerTitleForm>
                    <h1>{title}</h1>
                </styled.ContainerTitleForm>
                {children}
            </styled.ContainerFormItems>
        </styled.Form>
    )

};