import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
} from "@ionic/react";


import Footer from "../components/footer";
import Header from "../components/header";
import Questions from "../components/questions";



const Home: React.FC = () => {


  return (
   
    <IonPage>
      <IonContent>
     <Header/>
        <IonCard>
          <IonCardContent> 
            <IonCardHeader>Where would you like to go?</IonCardHeader> 
      
            <Questions />
      
            </IonCardContent>
            </IonCard>
            <IonCard>
          <IonCardContent>
            answers
            <div>
  
            </div>
            </IonCardContent>
         </IonCard>
         <Footer/>
        </IonContent>
        
    </IonPage>
  );
};


export default Home;
