import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
//import '../Navegacion.css';
import App from "./App";
import Ahorcadito from "./ahorcadito/src/AppAhorcadito";
import AtrapaComida from "./proyecto-phaser-final/src/App"
import Arkkanoid from "./ArkanoidGame/App";
import PiedraPapelTijera from "./PiedraPapelTijera_GRUPO4-main/src/components/App";
import JuegoMemoria from "./JuegoDeMemoria/GameMemory";

class Navegacion extends React.Component{
    render(){
    return(
        <>
     <BrowserRouter>
        <div className="PaginaPrincipal"> 
         
            <Link to ='/' className = "button1" >Inicio</Link>
            
        </div>
    
        
            <Routes>
            <Route path = "/" element= {<App/>}/>
            <Route path = "/Ahorcadito" element= {<Ahorcadito/>}/>
            <Route path = "/AtrapaComida" element= {<AtrapaComida/>}/>
            <Route path = "/Arkkanoid" element= {<Arkkanoid/>}/>
            <Route path = "/PiedraPapelTijera" element= {<PiedraPapelTijera/>}/>
            <Route path = "/JuegoMemoria" element= {<JuegoMemoria/>}/>
        </Routes>
     </BrowserRouter>
     </>
    )
}
}
export default Navegacion;