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

const Traductor: React.FC = () => {

  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const numeroALetras = (numero: number): string => {

    const unidades = [
      '',
      'uno',
      'dos',
      'tres',
      'cuatro',
      'cinco',
      'seis',
      'siete',
      'ocho',
      'nueve'
    ];

    const especiales = [
      'diez',
      'once',
      'doce',
      'trece',
      'catorce',
      'quince',
      'dieciséis',
      'diecisiete',
      'dieciocho',
      'diecinueve',
      'veinte',
      'veintiuno',
      'veintidós',
      'veintitrés',
      'veinticuatro',
      'veinticinco',
      'veintiséis',
      'veintisiete',
      'veintiocho',
      'veintinueve'
    ];

    const decenas = [
      '',
      '',
      'veinte',
      'treinta',
      'cuarenta',
      'cincuenta',
      'sesenta',
      'setenta',
      'ochenta',
      'noventa'
    ];

    const centenas = [
      '',
      'ciento',
      'doscientos',
      'trescientos',
      'cuatrocientos',
      'quinientos',
      'seiscientos',
      'setecientos',
      'ochocientos',
      'novecientos'
    ];

    if (numero < 10) {
      return unidades[numero];
    }

    if (numero >= 10 && numero <= 29) {
      return especiales[numero - 10];
    }

    if (numero < 100) {
      const decena = Math.floor(numero / 10);
      const unidad = numero % 10;

      if (unidad === 0) {
        return decenas[decena];
      }

      return decenas[decena] + ' y ' + unidades[unidad];
    }

    if (numero === 100) {
      return 'cien';
    }

    if (numero < 1000) {
      const centena = Math.floor(numero / 100);
      const resto = numero % 100;

      if (resto === 0) {
        return centenas[centena];
      }

      return centenas[centena] + ' ' + numeroALetras(resto);
    }

    if (numero === 1000) {
      return 'mil';
    }

    return '';
  };

  const traducir = () => {

    const valor = Number(numero);

    if (!Number.isInteger(valor) || valor < 1 || valor > 1000) {
      setResultado('Ingresa un número entero entre 1 y 1000.');
      return;
    }

    setResultado(numeroALetras(valor));
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonTitle>Números a Letras</IonTitle>

        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>

          <IonCardContent>

            <h1>Traductor de Números a Letras</h1>

            <p>
              Ingresa un número del 1 al 1000.
            </p>

            <IonInput
              type="number"
              label="Número"
              labelPlacement="stacked"
              placeholder="Ejemplo: 325"
              value={numero}
              onIonInput={(e) => setNumero(e.detail.value ?? '')}
            />

            <br />

            <IonButton expand="block" onClick={traducir}>
              Traducir
            </IonButton>

            {resultado && (
              <h2>Resultado: {resultado}</h2>
            )}

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Traductor;