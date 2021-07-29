import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonNote,
    IonPage,
  } from '@ionic/react';
  
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  import './Categorias.css';
  
  interface Categoria {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const Categorias_list: Categoria[] = [
    {
      title: 'Licores',
      url: '/cat/1',
      iosIcon: mailOutline,
      mdIcon: mailSharp
    },
    {
      title: 'Cervezas Importadas',
      url: '/cat/2',
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Croquetas',
      url: '/cat/1',
      iosIcon: heartOutline,
      mdIcon: heartSharp
    },
    {
        title: 'Ropa Lugama',
        url: '/cat/1',
        iosIcon: heartOutline,
        mdIcon: heartSharp
      },
      {
        title: 'Gl soluciones Tech',
        url: '/cat/1',
        iosIcon: heartOutline,
        mdIcon: heartSharp
      }
    
  ];
  
  const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  
  
  const Categorias: React.FC = () => {


    return(
        <IonPage>
            <IonContent>
            <IonHeader>
                        <IonMenuButton>
                            
                        </IonMenuButton>
                        <IonLabel>CATEGORIAS TIENDA</IonLabel>
                        

            </IonHeader>

            <IonList>
            {Categorias_list.map((Cat_lista, index) => {

                return(<IonItem className="lista_cat">

                    <IonLabel className="nombre_c">{Cat_lista.title}</IonLabel>
            </IonItem>);

                
            })       
        
            }
                    
                
            </IonList>

            </IonContent>







        </IonPage>



    );

  };export default Categorias;