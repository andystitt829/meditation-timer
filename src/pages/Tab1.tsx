import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TwoMinuteTimerComponent from '../components/TwoMinuteTimer';
import FiveMinuteTimerComponent from '../components/FiveMinuteTimer';
import TenMinuteTimerComponent from '../components/TenMinuteTimer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Timers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Timers</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1 className='ion-text-center'>Timers</h1>
        <TwoMinuteTimerComponent />
        <FiveMinuteTimerComponent />
        <TenMinuteTimerComponent />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
