import sendgrid from '@sendgrid/mail'
import { IParamsSendMail, IResSendEmail, ISendMailService } from './ISendMailService';

class SendMailService implements ISendMailService {

    public async send({ from, to, subject, body }: IParamsSendMail): Promise<IResSendEmail> {

        sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

        const [ result ] = await sendgrid.send({
            from: from ? from : process.env.SEND_EMAIL_FROM as string,
            to,
            subject,
            html: body
        });

        return { statusCode: result.statusCode };

    };

};

export {
    SendMailService
};
