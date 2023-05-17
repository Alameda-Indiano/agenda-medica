import 'devextreme/dist/css/dx.light.css';
import { FC } from "react";
import deMessages from "devextreme/localization/messages/de.json";
import { locale, loadMessages } from "devextreme/localization";
import { AppRouter } from './routes';
import { Provider } from 'react-redux'; 
import { Store } from './store';


export const App: FC = () => {

  loadMessages(deMessages);
  locale(navigator.language);

  return (
    <Provider store={Store} >
      <AppRouter />
    </Provider>
  )
};
