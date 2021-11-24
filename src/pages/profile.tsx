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
import user from "../img/fictional_user.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination
} from 'swiper';
import "swiper/swiper.scss";
SwiperCore.use([Pagination]);
const Profile: React.FC = () => {
  const data = [
    {
      title: "Trail",
      subtitle: "Long Trail",
      image: require ("../img/trail.jpeg"),
    },
    {
      title: "Mountians",
      subtitle: "Big Mountians",
      image: require("../img/mountians.jpeg"),
    },
    {
      title: "Ocean",
      subtitle: "Big Ocean",
      image: require("../img/beach.jpeg"),
    },
    {
      title: "Desert",
      subtitle: "Big Desert",
      image: require("../img/desert.jpeg"),
    },
    {
      title: "City",
      subtitle: "Big City",
      image: require("../img/city.jpeg"),
    },
  ];
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
        slidesPerView={3} 
        pagination={{"dynamicBullets": true}}>
          {data.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <IonCard>
                  <img src={card.image} alt="card" className="image" />

                  <IonCardContent>
                    <IonCardTitle className="title">{card.title}</IonCardTitle>
                    <IonNote className="subtitle">{card.subtitle}</IonNote>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
            );
          })}
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
