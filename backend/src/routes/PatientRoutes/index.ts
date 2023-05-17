import { Router } from "express";
import { JWTFactory } from "../../middlewares/JWT";
import { PatientFactory } from "../../useCases/PatientCases";

const PatientRoutes = Router();

PatientRoutes.post('/Patient/Create', 
    (req, res, next) => JWTFactory.verify().handle(req, res, next),
    (req, res) => PatientFactory.create().handle(req, res) 
);

PatientRoutes.get('/Patient', 
    (req, res, next) => JWTFactory.verify().handle(req, res, next),
    (req, res) => PatientFactory.list().handle(req, res) 
);

export { PatientRoutes };
