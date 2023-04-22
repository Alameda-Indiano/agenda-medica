import { Router } from "express";
import { ScheduleFactory } from "../../useCases/ScheduleCases";

const ScheduleRoutes = Router();

ScheduleRoutes.post('/Schedule', (req, res) => ScheduleFactory.create().handle(req, res) );
ScheduleRoutes.get('/Schedule/:status', (req, res) => ScheduleFactory.filterStatus().handle(req, res) );
ScheduleRoutes.get('/Schedule/ByPeriod/:period', (req, res) => ScheduleFactory.filterByPeriod().handle(req, res) );
ScheduleRoutes.get('/Schedule/ByDoctorAndPeriod/:doctorAndPeriod', (req, res) => ScheduleFactory.filterDoctorByPediod().handle(req, res) );

export { ScheduleRoutes };
