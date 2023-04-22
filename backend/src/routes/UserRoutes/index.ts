import { Router } from "express";
import { UserFactory } from "../../useCases/UserCases";

const UserRoutes = Router();

UserRoutes.post('/User/Create', (req, res) => UserFactory.create().handle(req, res) );
UserRoutes.post('/User/Login', (req, res) => UserFactory.login().handle(req, res) );

export { UserRoutes };
