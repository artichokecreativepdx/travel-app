import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonContent>
    <IonAvatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonAvatar>
  </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
