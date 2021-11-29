import React from 'react'
import {
    IonContent,
    IonHeader,
    IonToolbar,
    IonItem,
    IonTitle
} from "@ionic/react";
import logoLong from "../img/planit_adventures.png";
import topSplash from "../img/top_splash.jpeg";
const Header: React.FC = () => {
    return (
        
           <IonContent>
      <IonHeader className="logo_splash">
        <img src={logoLong} alt="planit logo" />
      </IonHeader>
      <IonToolbar>
        <img src={topSplash} alt="header splash"/>
        <IonItem>
          <IonTitle>home</IonTitle>
        </IonItem>
      </IonToolbar> 
      </IonContent>
    )
}

export default Header
