import { Router } from "express";
import { ScheduleFactory } from "../../useCases/ScheduleCases";

const ScheduleRoutes = Router();

ScheduleRoutes.post('/Schedule', (req, res) => ScheduleFactory.create().handle(req, res) );
ScheduleRoutes.get('/Schedule/SchedulesByPeriod/:period', (req, res) => ScheduleFactory.filterOfTheDay().handle(req, res) );
ScheduleRoutes.get('/Schedule/:status', (req, res) => ScheduleFactory.filterStatus().handle(req, res) );

export { ScheduleRoutes };
