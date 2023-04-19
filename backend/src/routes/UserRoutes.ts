import { Router } from "express";
import { UserFactory } from "../useCases/Users";

const UserRoutes = Router();

UserRoutes.post('/User', (req, res) => UserFactory.create().handle(req, res) );

export { UserRoutes };
