import {
  IonContent,
  IonPage,
  IonCardContent,
  IonCardHeader,
} from "@ionic/react";


import Footer from "../components/footer";
import Form from "../components/form";
import Header from "../components/header";
import Card from "../components/card";



const Home: React.FC = () => {


  return (
   
    <IonPage>
      <IonContent>
     <Header/>
        <Card>
          <IonCardContent> 
            <IonCardHeader>Where would you like to go?</IonCardHeader> 
      
           
      
            </IonCardContent>
            
            </Card>
            <Form/>
            <Card>
          <IonCardContent>
            answers
            
            </IonCardContent>
         </Card>
         <Footer/>
        </IonContent>
        
    </IonPage>
  );
};


export default Home;
