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

class Navegacion extends React.Component{
    render(){
    return(
        <>
     <BrowserRouter>
        <div className="PaginaPrincipal"> 
            <h1 className="Titulo">MenuPrincipal</h1>
            <nav>
            <Link to ='/' className = "Boton" >Inicio</Link>
            <Link to ='/Ahorcadito' className = "Boton" >ahorcadito</Link>
            <Link to ='/AtrapaComida' className = "Boton" >AtrapaComida</Link>
            <Link to ='/Arkkanoid' className = "Boton" >Arkkanoid</Link>
            <Link to ='/PiPaTi' className = "Boton" >PiPaTi</Link>
            <Link to ='/JuegoMemoria' className = "Boton" >JuegoMemoria</Link>
            </nav>
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