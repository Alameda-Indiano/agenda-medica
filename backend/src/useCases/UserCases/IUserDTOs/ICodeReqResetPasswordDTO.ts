interface ICodeReqResetPasswordDTO {
    email: string;
};

interface IResCodeResetPassWord {
    code: string;
    email: string;
};

interface ISendMailResetPassWordDTO { 
    code: string;
    email: string;
};

export {
    ICodeReqResetPasswordDTO,
    IResCodeResetPassWord,
    ISendMailResetPassWordDTO
};