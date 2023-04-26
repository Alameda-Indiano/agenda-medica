import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../views/pages/login";
import { Home } from "../views/pages/home";
import { Register } from "../views/pages/register";
import { ResetPassword } from "../views/pages/resetPassword";
import { DashBoard } from "../views/pages/dashBoard";
import { Agenda } from "../views/pages/agenda/";
import { PrivateRoute } from "./privateRoute";

export const AppRouter = () => {

    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/resetpassword" element={<ResetPassword />} />

                <Route path="/dashboard" element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<DashBoard />} />
                </Route>

                <Route path="/agendamento" element={<PrivateRoute />}>
                    <Route path="/agendamento" element={<Agenda />} />
                </Route>

            </Routes>
        </Router>

    );

};