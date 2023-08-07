import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tips from '../components/Tips';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tips</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Tips />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
