import React from 'react';
import { Map, Marker } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'
import { IonContent, IonTitle, IonIcon, IonSearchbar, IonToolbar, IonPage,IonButtons, IonButton, IonCard, IonHeader } from '@ionic/react';
import {search} from 'ionicons/icons';
import logoLong from '../img/planit_adventures.png'


const maptilerProvider = maptiler('u8fyYdt1QkFGd5hcaTzq', 'voyager')
export function MyMap() {
  return (
    <Map height={500} defaultCenter={[47.61798491437027, -122.32060673850827]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  )
}

const Explore: React.FC = () => {
  return (
    <IonPage>
       <IonHeader className="logo_splash">
       
              
       <img src={logoLong} alt="planit logo"/>
       </IonHeader> 
    <IonContent>
    <IonToolbar>
    <IonTitle slot="start">
            Explore
         </IonTitle>
         </IonToolbar>
         <IonToolbar>
  <IonButtons slot="primary">
    <IonButton onClick={() => {}}>
      <IonIcon slot="icon-only" icon={search} />
    </IonButton>
  </IonButtons>
  <IonSearchbar placeholder="Search Favorites" />
</IonToolbar>
      <IonCard>
      <Map
  provider={maptilerProvider}
  dprs={[1, 2]} // this provider supports HiDPI tiles
  height={500}
  defaultCenter={[47.61798491437027, -122.32060673850827]}
  defaultZoom={11}
/>

      </IonCard>
    </IonContent>
  </IonPage>
  );
};

export default Explore;
