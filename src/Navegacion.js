import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import '../Navegacion.css';
import Inicio from "./App";
import Ahorcadito from "./ahorcadito/src/componentes/Inicio";
import AtrapaComida from "./proyecto-phaser-final/src/game"
import Arkkanoid from "./ArkanoidGame/game";
import PiPaTi from "./PiedraPapelTijera_GRUPO4-main/src/components/game";
import JuegoMemoria from "./JuegoDeMemoria/GameMemory";

class Navegacion extends React.Component{
    render(){
    return(
        <>
     <BrowserRouter>
        <div className="PaginaPrincipal">
            <h1 className="Titulo">MenuPrincipal</h1>
            <nav>  
            <Link to ='/' className = "Boton" >Inicio</Link>
            <Link to ='/Ahorcadito' className = "Boton" >Jugar</Link>
            <Link to ='/AtrapaComida' className = "Boton" >Jugar</Link>
            <Link to ='/Arkkanoid' className = "Boton" >Jugar</Link>
            <Link to ='/PiPaTi' className = "Boton" >Jugar</Link>
            <Link to ='/JuegoMemoria' className = "Boton" >Jugar</Link>
 
            </nav>
        </div>
    
        <Routes>
            <Route path = "/" element= {<Inicio/>}/>
            <Route path = "Ahorcadito" element= {<Ahorcadito/>}/>
            <Route path = "AtrapaComida" element= {<AtrapaComida/>}/>
            <Route path = "Arkkanoid" element= {<Arkkanoid/>}/>
            <Route path = "PiPaTi" element= {<PiPaTi/>}/>
            <Route path = "JuegoMemoria" element= {<JuegoMemoria/>}/>
        </Routes>
     </BrowserRouter>
     </>
    )
}
}
export default Navegacion;
