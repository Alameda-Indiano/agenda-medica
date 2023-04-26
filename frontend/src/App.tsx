import 'devextreme/dist/css/dx.light.css';
import { FC } from "react";
import deMessages from "devextreme/localization/messages/de.json";
import { locale, loadMessages } from "devextreme/localization";
import { RequestPasswordReset } from './views/pages/requestPasswordReset';

export const App: FC = () => {

  loadMessages(deMessages);
  locale(navigator.language);

  return (
    <div className="App">
      <RequestPasswordReset />
    </div>
  )
};
