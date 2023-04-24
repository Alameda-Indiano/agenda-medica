import { Router } from "express";
import { MailFactory } from "../../middlewares/Mail";
import { UserFactory } from "../../useCases/UserCases";

const UserRoutes = Router();

UserRoutes.post('/User/Create', (req, res) => UserFactory.create().handle(req, res) );
UserRoutes.post('/User/Login', (req, res) => UserFactory.login().handle(req, res) );

UserRoutes.post('/User/PasswordResetRequest', 
    (req, res, next) => UserFactory.passwordResetRequest().handle(req, res, next),
    (req, res) => MailFactory.sendMailResetPassWord().handle(req, res),
);

UserRoutes.post('/User/ResetPassword', (req, res) => UserFactory.resetPassword().handle(req, res));

export { UserRoutes };
