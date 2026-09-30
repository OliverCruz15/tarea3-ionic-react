import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonButtons,
IonMenuButton
} from '@ionic/react';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
  <IonToolbar>

    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>

    <IonTitle>Página Inicial</IonTitle>

  </IonToolbar>
</IonHeader>

      <IonContent className="ion-padding">

        <IonCard className="perfil-card">

          <IonCardContent>

            <IonAvatar className="foto-perfil">
              <img
                src="/foto.png"
                alt="Foto de Oliver De la Cruz"
              />
            </IonAvatar>

            <h1>Oliver De la Cruz</h1>

            <div className="datos-personales">
              <p>
                <strong>Nombre:</strong> Oliver
              </p>

              <p>
                <strong>Apellido:</strong> De la Cruz
              </p>

              <p>
                <strong>Correo:</strong> odelacruz582@gmail.com
              </p>
            </div>

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Home;
