import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
//import '../Navegacion.css';
import App from "./App";

import DudeGame from './Dude/DudeGame';//nice very nice
import Aho from './ahorcadito/Aho';//le falta una imagen xdd
import Ark from "./ArkanoidGame/Ark";//REVISAR ESCENA DE WIN
import GameMemory from "./JuegoDeMemoria/GameMemory";//goood
import PPT from './PiedraPapelTijera/components/PPT';//le falta direccionar los iconos de pidera papel y tijera
import CatRain from "./RainFoodCat/CatRain"

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

            <Route path = "/Ahorcadito" element= {<Aho/>}/>
            <Route path = "/AtrapaComida" element= {<CatRain/>}/>
            <Route path = "/Arkkanoid" element= {<Ark/>}/>
            <Route path = "/PiPaTi" element= {<PPT/>}/>
            <Route path = "/JuegoMemoria" element= {<GameMemory/>}/>

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