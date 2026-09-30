import { useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/react';

const Tabla: React.FC = () => {

  const [numero, setNumero] = useState('');
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const generarTabla = () => {
    if (numero === '') {
      setMostrarTabla(false);
      return;
    }

    setMostrarTabla(true);
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Tabla de Multiplicar</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>

          <IonCardContent>

            <h1>Tabla de Multiplicar</h1>

            <p>
              Ingresa un número para mostrar su tabla hasta el 13.
            </p>

            <IonInput
              type="number"
              label="Número"
              labelPlacement="stacked"
              placeholder="Ejemplo: 5"
              value={numero}
              onIonInput={(e) => {
                setNumero(e.detail.value ?? '');
                setMostrarTabla(false);
              }}
            />

            <br />

            <IonButton expand="block" onClick={generarTabla}>
              Generar Tabla
            </IonButton>

            {mostrarTabla && (
              <div>

                <h2>Tabla del {numero}</h2>

                {Array.from({ length: 13 }, (_, index) => {
                  const multiplicador = index + 1;

                  return (
                    <p key={multiplicador}>
                      {numero} × {multiplicador} = {Number(numero) * multiplicador}
                    </p>
                  );
                })}

              </div>
            )}

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Tabla;