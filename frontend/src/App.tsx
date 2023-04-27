import 'devextreme/dist/css/dx.light.css';
import { FC } from "react";
import deMessages from "devextreme/localization/messages/de.json";
import { locale, loadMessages } from "devextreme/localization";
import { AppRouter } from './routes';
import { AuthUserProvider } from './context/AuthContext';
import { SchendulesProvider } from './context/SchendulesContext';

export const App: FC = () => {

  loadMessages(deMessages);
  locale(navigator.language);

  return (
    <AuthUserProvider>
      <SchendulesProvider>
        <AppRouter />
      </SchendulesProvider>
    </AuthUserProvider>
  )
};
