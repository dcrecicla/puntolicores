import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';

import './Productos_lista.css';
var promocion : false;
const Productos_lista : React.FC= () => {


  const [count, setCount] = useState(true);
return (
<IonPage>
  <IonContent>
  <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>PRODUCTOS</IonTitle>
        </IonToolbar>

    </IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem>
                <IonThumbnail slot="start">
      
                  <img src="https://tiendasyaco.vtexassets.com/arquivos/ids/155525-300-300?width=300&height=300&aspect=true" />
                </IonThumbnail>
                <div className="wrapper">
                <IonLabel><IonText color="dark"> Whisky Buchanans</IonText></IonLabel>
                <IonLabel><IonText color="primary"> <h4>750ml, (1)unidad</h4></IonText></IonLabel>
                <IonLabel><IonText color="danger"><h4>$75.000</h4></IonText></IonLabel>
                {count?<IonLabel><IonText color="success"><h4>$63.000</h4></IonText></IonLabel>:''}
                
                
                </div>
                </IonItem>
      
      </IonCol>
      
         
        </IonRow>
       </IonGrid> 
    <IonList>
     
    </IonList>
  </IonContent>
</IonPage>
);
};

export default Productos_lista;