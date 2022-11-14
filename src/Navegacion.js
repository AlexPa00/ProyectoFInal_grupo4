import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
//import '../Navegacion.css';
import App from "./App";

import DudeGame from './Dude/DudeGame';//nice very nice
import Aho from './ahorcadito/Aho';//le falta una imagen xdd
import Ark from "./ArkanoidGame/Ark";
import GameMemory from "./JuegoDeMemoria/GameMemory";//goood
import PPT from './PiedraPapelTijera/components/PPT';
import CatRain from "./RainFoodCat/CatRain"



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

        </Routes>
     </BrowserRouter>
     </>
    )
}
}
export default Navegacion;