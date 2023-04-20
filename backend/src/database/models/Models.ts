import { ITemplateLauncher } from "./IModels";

import { UsersModel } from "./Users/UsersModel";
import { UsersTemplateLauncher } from "./Users/UsersTemplateLauncher";

import { DoctorsModel } from "./Doctors/DoctorsModel";
import { DoctorsTemplateLauncher } from "./Doctors/DoctorsTemplateLauncher";

import { PatientsModel } from "./Patients/PatientsModel";
import { PatientsTemplateLauncher } from "./Patients/PatientsTemplateLauncher";

import { SchedulesModel } from "./Schedules/SchedulesModel";
import { SchedulesTemplateLauncher } from "./Schedules/SchedulesTemplateLauncher";

interface IModels {
    users: typeof UsersModel;
    doctors: typeof DoctorsModel;
    patients: typeof PatientsModel;
    schedules: typeof SchedulesModel;
};

const models: Array<ITemplateLauncher> = [
    UsersTemplateLauncher,
    DoctorsTemplateLauncher,
    PatientsTemplateLauncher,
    SchedulesTemplateLauncher
];

export { IModels, models };