import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonItem,
  IonTitle,
} from '@ionic/react';

import Footer from '../components/footer';
import Form from '../components/form';
import logoLong from '../img/planit_adventures.png';
import topSplash from '../img/top_splash.jpeg';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader className="logo_splash">
          <img src={logoLong} alt="planit logo" />
        </IonHeader>
        <IonToolbar>
          <IonItem>
            <IonTitle>Home</IonTitle>
          </IonItem>
        </IonToolbar>
        <IonItem>
          <img src={topSplash} alt="travel" />
        </IonItem>
        <Form />
        <IonCard>
          <IonCardContent>answers</IonCardContent>
        </IonCard>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
