export interface IDoctorData {
    id: number;
    name: string;
    email: string;
};

export interface IResponseListDoctorsDTOs {
    data: {
        message: string;
        statusCode: 200 | 400;
        jwt: string;
        value: Array<IDoctorData>;
    }
};