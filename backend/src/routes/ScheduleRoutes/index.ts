import { Router } from "express";
import { JWTFactory } from "../../middlewares/JWT";
import { ScheduleFactory } from "../../useCases/ScheduleCases";

const ScheduleRoutes = Router();

ScheduleRoutes.post('/Schedule', 
    (req, res, next) => JWTFactory.verify().handle(req, res, next),
    (req, res) => ScheduleFactory.create().handle(req, res) 
);

ScheduleRoutes.get('/Schedule/:status', 
    (req, res, next) => JWTFactory.verify().handle(req, res, next),
    (req, res) => ScheduleFactory.filterStatus().handle(req, res) 
);

ScheduleRoutes.get('/Schedule/ByPeriod/:period', 
    (req, res, next) => JWTFactory.verify().handle(req, res, next),
    (req, res) => ScheduleFactory.filterByPeriod().handle(req, res) 
);

ScheduleRoutes.get('/Schedule/ByDoctorAndPeriod/:doctorAndPeriod', 
    (req, res, next) => JWTFactory.verify().handle(req, res, next),
    (req, res) => ScheduleFactory.filterDoctorByPediod().handle(req, res) 
);

export { ScheduleRoutes };
