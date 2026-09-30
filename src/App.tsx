import { Navigate, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import Tabla from './pages/Tabla';
import Experiencia from './pages/Experiencia';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>

      <IonMenu contentId="main-content">

        <IonHeader>
          <IonToolbar>
            <IonTitle>Tarea 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>

          <IonList>

            <IonItem routerLink="/home" routerDirection="none">
              <IonLabel>Página Inicial</IonLabel>
            </IonItem>

            <IonItem routerLink="/sumadora" routerDirection="none">
              <IonLabel>Sumadora</IonLabel>
            </IonItem>

            <IonItem routerLink="/traductor" routerDirection="none">
              <IonLabel>Números a Letras</IonLabel>
            </IonItem>

            <IonItem routerLink="/tabla" routerDirection="none">
              <IonLabel>Tabla de Multiplicar</IonLabel>
            </IonItem>

            <IonItem routerLink="/experiencia" routerDirection="none">
              <IonLabel>Experiencia Personal</IonLabel>
            </IonItem>

          </IonList>

        </IonContent>

      </IonMenu>

      <IonRouterOutlet id="main-content">

        <Route path="/home" element={<Home />} />

        <Route path="/sumadora" element={<Sumadora />} />

        <Route path="/traductor" element={<Traductor />} />

        <Route path="/tabla" element={<Tabla />} />

        <Route path="/experiencia" element={<Experiencia />} />

        <Route path="/" element={<Navigate to="/home" replace />} />

      </IonRouterOutlet>

    </IonReactRouter>

  </IonApp>
);

export default App;
