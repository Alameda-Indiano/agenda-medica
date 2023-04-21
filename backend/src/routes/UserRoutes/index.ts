import { Router } from "express";
import { UserFactory } from "../../useCases/UserCases";

const UserRoutes = Router();

UserRoutes.post('/User', (req, res) => UserFactory.create().handle(req, res) );

export { UserRoutes };
