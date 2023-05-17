export interface IPatientData {
    id: number;
    name: string;
    email: string;
    age: string;
    sex: 'Masculino' | 'Feminino';
    status: 'Ativo' | 'Inativo';
};

export interface IResponseListPatientDTOs {
    data: {
        message: string;
        statusCode: 200 | 400;
        jwt: string;
        value: Array<IPatientData>
    }
};