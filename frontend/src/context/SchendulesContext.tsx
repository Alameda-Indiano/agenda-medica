import React, { createContext, useState, FC, useEffect, useContext } from "react";
import { DashboardRepository } from "../repositories/DashboardRepository/in-database/DashboardRepositoryInDatabase";
import { GetByPeriodService } from "../useCases/Schendules/GetByPeriodService/GetByPeriodService";
import { GetByStatusService } from "../useCases/Schendules/GetByStatusService/GetByStatusService";
import { IDataSchedules } from "../useCases/Schendules/ISchendulesDTOs/IResponseSchendules";
import { AuthUserContext } from "./AuthContext";

export const SchendulesContext = createContext<{ 
    dataSchendules: IDataSchedules | any
    schedulesCanceled: IDataSchedules | any
    searchSchenduleDate: any
}>({
    dataSchendules: undefined,
    schedulesCanceled: undefined,
    searchSchenduleDate: undefined
});

export const SchendulesProvider: FC<{ children: any }> = ({ children }) => {

    
    const dashboardRepository = new DashboardRepository();
    const getByPeriodService = new GetByPeriodService(dashboardRepository);
    const getByStatusService = new GetByStatusService(dashboardRepository);
    
    const { refreshToken } = useContext(AuthUserContext);
    
    const [ dataSchendules, setSchendules ] = useState<IDataSchedules>();
    const [ schedulesCanceled, setSchedulesCanceled ] = useState<number>(0);

    const searchSchenduleDate = async () => {

        const responseByPeriod = await getByPeriodService.get({ period: 'Today' });
        const responseByStatus = await getByStatusService.get({ status: 'Cancelado' });

        setSchendules(responseByPeriod.data.value)
        setSchedulesCanceled(responseByStatus.data.value.total_schedules);
        refreshToken(responseByPeriod.data.jwt);

    };

    useEffect(() => { searchSchenduleDate() }, []);

    return (
        <SchendulesContext.Provider value={{ 
            dataSchendules,
            schedulesCanceled,
            searchSchenduleDate
        }}>
            {children}
        </SchendulesContext.Provider>
    )
};
