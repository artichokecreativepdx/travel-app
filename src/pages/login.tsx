
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
  import React, { useState } from 'react';
  import axios from "axios";
  import { IonGrid, IonRow, IonCol } from '@ionic/react';
  import { personCircle } from "ionicons/icons";
  import { useHistory } from "react-router-dom";
  import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonAlert } from '@ionic/react';
  import logo from "../img/planit.png";
  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
      return re.test(String(email).toLowerCase());
  }
  const Login: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState<string>("eve.holt@reqres.in");
    const [password, setPassword] = useState<string>("cityslicka");
    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const handleLogin = () => {
      if (!email) {
          setMessage("Please enter a valid email");
          setIserror(true);
          return;
      }
      if (validateEmail(email) === false) {
          setMessage("Your email is invalid");
          setIserror(true);
          return;
      }
  
      if (!password || password.length < 6) {
          setMessage("Please enter your password");
          setIserror(true);
          return;
      }
  
      const loginData = {
          "email": email,
          "password": password
      }
  
      const api = axios.create({
          baseURL: `https://reqres.in/api`
      })
      api.post("/login", loginData)
          .then(res => {             
              history.push("/dashboard/" + email);
           })
           .catch(error=>{
              setMessage("Auth failure! Please create an account");
              setIserror(true)
           })
    };
  
    return (
      <IonPage>
         <IonHeader className="logo_splash">
        <img src={logo} alt="planit logo" width="200" />
      </IonHeader>
        
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
   
        <IonContent fullscreen className="ion-padding ion-text-center">
          <IonGrid>
          <IonRow>
            <IonCol>
              <IonAlert
                  isOpen={iserror}
                  onDidDismiss={() => setIserror(false)}
                  cssClass="my-custom-class"
                  header={"Error!"}
                  message={message}
                  buttons={["Dismiss"]}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonIcon
                  style={{ fontSize: "70px", color: "#0040ff" }}
                  icon={personCircle}
              />
            </IonCol>
          </IonRow>
            <IonRow>
              <IonCol>
              <IonItem>
              <IonLabel position="floating"> Email</IonLabel>
              <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  >
              </IonInput>
              </IonItem>
              </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol>
              <IonItem>
                <IonLabel position="floating"> Password</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  >
                </IonInput>
              </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                
                <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
                
  
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
