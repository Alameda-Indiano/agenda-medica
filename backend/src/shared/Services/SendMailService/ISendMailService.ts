interface IResSendEmail { statusCode: number };

interface IParamsSendMail { 
    from?: string;
    to: string;
    subject: string; 
    body: string;
};

interface ISendMailService {

    send({ from, to, subject, body }: IParamsSendMail): Promise<IResSendEmail>

};

export { 
    ISendMailService,
    IParamsSendMail,
    IResSendEmail
};