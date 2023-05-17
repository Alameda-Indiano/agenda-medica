export interface IDataItemSchedule {
    id: number;
    name: string;
    schedule_date: string;
    status: string;
    patient_id: number;
    doctor_id: number;
    patient: {
        id: number;
        name: string;
        email: string;
        age: string;
        sex: "Masculino" | "Feminino";
        status: "Ativo" | "Desativo";
    };
    doctor: {
        id: number;
        name: string;
        email: string;
    };
};

export interface IDataSchedules {
    schedules: [
        IDataItemSchedule
    ] | [];
    total_schedules: number;
}

export type IResponseSchendules = {
    data: {
        message: string;
        statusCode: number;
        jwt: string;
        value: IDataSchedules
    }
};