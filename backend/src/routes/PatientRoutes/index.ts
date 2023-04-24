import { Router } from "express";
import { JWTFactory } from "../../middlewares/JWT";
import { PatientFactory } from "../../useCases/PatientCases";

const PatientRoutes = Router();

PatientRoutes.post('/Patient', 
    (req, res, next) => JWTFactory.verify().handle(req, res, next),
    (req, res) => PatientFactory.create().handle(req, res) 
);

export { PatientRoutes };
