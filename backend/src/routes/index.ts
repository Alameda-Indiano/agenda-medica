import { Router } from "express";
import { DoctorRoutes } from "./DoctorRoutes";
import { PatientRoutes } from "./PatientRoutes";
import { ScheduleRoutes } from "./ScheduleRoutes";
import { UserRoutes } from "./UserRoutes";

export const Routes: Array<Router> = [
    UserRoutes,
    DoctorRoutes,
    PatientRoutes,
    ScheduleRoutes
];