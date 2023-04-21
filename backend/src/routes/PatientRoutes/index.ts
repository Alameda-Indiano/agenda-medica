import { Router } from "express";
import { PatientFactory } from "../../useCases/PatientCases";

const PatientRoutes = Router();

PatientRoutes.post('/Patient', (req, res) => PatientFactory.create().handle(req, res) );

export { PatientRoutes };
