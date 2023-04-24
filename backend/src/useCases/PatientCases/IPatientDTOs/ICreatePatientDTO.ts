interface ICreatePatientDTO {
    name: string;
    email: string;
    age: Date;
    sex: 'Masculino' | 'Feminino';
};

export {
    ICreatePatientDTO
};