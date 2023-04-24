import { SendMailService } from "../../shared/Services/SendMailService";
import { SendMailResetPassWord } from "./SendMailResetPassWord";

class Mail {

    private sendMailService: SendMailService

    constructor() {
        this.sendMailService = new SendMailService();
    };

    public sendMailResetPassWord() {
        const sendMailResetPassWord = new SendMailResetPassWord(this.sendMailService);
        return sendMailResetPassWord;
    };

};

export const MailFactory = new Mail();