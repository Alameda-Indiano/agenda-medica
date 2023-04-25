import { FC } from "react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { RequestPasswordReset } from "./pages/requestPasswordReset";
import { ResetPassword } from "./pages/resetPassword";

export const App: FC = () => {
  return (
    <div className="App">
      <ResetPassword />
    </div>
  )
};
