import { Router } from "express";
import { DoctorRoutes } from "./DoctorRoutes";
import { UserRoutes } from "./UserRoutes";

export const Routes: Array<Router> = [
    UserRoutes,
    DoctorRoutes
];