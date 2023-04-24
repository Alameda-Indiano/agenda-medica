import { Router } from "express";
import { JWTFactory } from "../../middlewares/JWT";
import { DoctorFactory } from "../../useCases/DoctorCases";

const DoctorRoutes = Router();

DoctorRoutes.post('/Doctor', 
    (req, res, next) => JWTFactory.verify().handle(req, res, next),
    (req, res) => DoctorFactory.create().handle(req, res) 
);

export { DoctorRoutes };
