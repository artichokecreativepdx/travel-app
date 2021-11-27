import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonAvatar,
  IonCardContent,
  IonItem,
  IonLabel,
  IonCardTitle,
  IonNote,
} from "@ionic/react";
import logoLong from "../img/planit_adventures.png";
import Beach from "../img/beach.jpeg";
import City from "../img/city.jpeg";
import Desert from "../img/desert.jpeg";
import Mountians from "../img/mountians.jpeg";
import Trail from "../img/trail.jpeg";
import user from "../img/fictional_user.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination
} from 'swiper';
import "swiper/swiper.scss";
SwiperCore.use([Pagination]);
const Profile: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent>
        <IonHeader className="logo_splash">
          <img src={logoLong} alt="planit logo" />
        </IonHeader>
        <IonToolbar>
          <IonItem>
            <IonTitle>Profile</IonTitle>
          </IonItem>
        </IonToolbar>

        <IonCard>
          <IonAvatar className="avatar-lg">
            <img src={user} alt="fictional user" />
          </IonAvatar>
          <IonCardContent>
            I am a teacher who enjoys traveling over the summer and on holidays.
            I likes to plan my trips far in advance to tailor them as much as
            possible before I start packing.
          </IonCardContent>
        </IonCard>

        <Swiper 
        spaceBetween={5} 
        slidesPerView={1} 
        pagination={{"dynamicBullets": true}}>
          
           
              <SwiperSlide >
                <IonCard>
                <img src={Mountians} alt="mountians"/>
                  <IonCardContent>
                    <IonCardTitle className="title">Mountians</IonCardTitle>
                    <IonNote className="subtitle">Big Mountians</IonNote>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
              <SwiperSlide >
                <IonCard>
                <img src={Beach} alt="Beach"/>
                  <IonCardContent>
                    <IonCardTitle className="title">Beach</IonCardTitle>
                    <IonNote className="subtitle">Sweet Beach</IonNote>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
              <SwiperSlide >
                <IonCard>
                <img src={City} alt="City"/>
                  <IonCardContent>
                    <IonCardTitle className="title">City</IonCardTitle>
                    <IonNote className="subtitle">Sure is a city</IonNote>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
              <SwiperSlide >
                <IonCard>
                <img src={Desert} alt="desert"/>
                  <IonCardContent>
                    <IonCardTitle className="title">Desert</IonCardTitle>
                    <IonNote className="subtitle">Middle of nowhere</IonNote>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
              <SwiperSlide >
                <IonCard>
                <img src={Trail} alt="trail"/>
                  <IonCardContent>
                    <IonCardTitle className="title">Trail</IonCardTitle>
                    <IonNote className="subtitle">Neat little trail</IonNote>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
         
         
        </Swiper>

        <IonCard>
          <IonCardContent>
            <IonItem button onClick={() => {}}>
              <IonLabel>Travel Itnerary</IonLabel>
            </IonItem>
            <IonItem button onClick={() => {}}>
              <IonLabel>Guides</IonLabel>
            </IonItem>
            <IonItem button onClick={() => {}}>
              <IonLabel>Photos</IonLabel>
            </IonItem>
            <IonItem button onClick={() => {}}>
              <IonLabel>Tickets &amp; bookings</IonLabel>
            </IonItem>
            <IonItem button onClick={() => {}}>
              <IonLabel>settings</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Profile;
