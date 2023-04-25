import 'devextreme/dist/css/dx.light.css';
import { FC } from "react";
import { Agenda } from './pages/agenda';
import deMessages from "devextreme/localization/messages/de.json";
import { locale, loadMessages } from "devextreme/localization";

export const App: FC = () => {

  loadMessages(deMessages);
  locale(navigator.language);

  return (
    <div className="App">
      <Agenda />
    </div>
  )
};
