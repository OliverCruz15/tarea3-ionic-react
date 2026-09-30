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

const Sumadora: React.FC = () => {

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = () => {
    const suma = Number(numero1) + Number(numero2);
    setResultado(suma);
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Sumadora</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>

          <IonCardContent>

            <h1>Sumadora</h1>

            <IonInput
              type="number"
              label="Primer número"
              labelPlacement="stacked"
              placeholder="Escribe un número"
              value={numero1}
              onIonInput={(e) => setNumero1(e.detail.value ?? '')}
            />

            <br />

            <IonInput
              type="number"
              label="Segundo número"
              labelPlacement="stacked"
              placeholder="Escribe otro número"
              value={numero2}
              onIonInput={(e) => setNumero2(e.detail.value ?? '')}
            />

            <br />

            <IonButton expand="block" onClick={sumar}>
              Sumar
            </IonButton>

            {resultado !== null && (
              <h2>Resultado: {resultado}</h2>
            )}

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Sumadora;