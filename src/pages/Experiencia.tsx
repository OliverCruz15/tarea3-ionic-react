import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent
} from '@ionic/react';

const Experiencia: React.FC = () => {

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Experiencia Personal</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>

          <IonCardContent>

            <h1>Mi Experiencia</h1>

            <p>
              En este video explico mi experiencia desarrollando
              esta aplicación utilizando Ionic y React.
            </p>

            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                height: 0,
                marginTop: '20px'
              }}
            >

              <iframe
                src=""
                title="Video de experiencia personal"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: '0'
                }}
                allowFullScreen
              />

            </div>

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Experiencia;