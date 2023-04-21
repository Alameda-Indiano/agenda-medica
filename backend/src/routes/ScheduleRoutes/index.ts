import { Router } from "express";
import { ScheduleFactory } from "../../useCases/ScheduleCases";

const ScheduleRoutes = Router();

ScheduleRoutes.post('/Schedule', (req, res) => ScheduleFactory.create().handle(req, res) );

export { ScheduleRoutes };
