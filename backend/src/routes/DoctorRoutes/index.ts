import { Router } from "express";
import { DoctorFactory } from "../../useCases/DoctorCases";

const DoctorRoutes = Router();

DoctorRoutes.post('/Doctor', (req, res) => DoctorFactory.create().handle(req, res) );

export { DoctorRoutes };
