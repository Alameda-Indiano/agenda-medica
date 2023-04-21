import { Router } from "express";
import { DoctorRoutes } from "./DoctorRoutes";
import { PatientRoutes } from "./PatientRoutes";
import { UserRoutes } from "./UserRoutes";

export const Routes: Array<Router> = [
    UserRoutes,
    DoctorRoutes,
    PatientRoutes
];