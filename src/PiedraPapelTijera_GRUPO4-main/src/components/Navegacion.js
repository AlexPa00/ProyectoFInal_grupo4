import React from "react";
import '../Navegacion.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import App from "./App";
import Desarrolladores from "./Desarrolladores";
import Inicio from "./Inicio";

class Navegacion extends React.Component{
    render(){
    return(
        <>
     <BrowserRouter>
        <div className="PaginaPrincipal">
            <h1 className="Titulo">Piedra Papel o Tijera</h1>
            <nav>  
            <Link to ='/' className = "Boton" >Inicio</Link>
            <Link to ='/game' className = "Boton" >Jugar</Link>
            <Link to ='/desarrolladores' className = "Boton" >Desarrolladores</Link>
            </nav>
        </div>

        <Routes>
            <Route path = "/" element= {<Inicio/>}/>
            <Route path = "game" element= {<App/>}/>
            <Route path = "desarrolladores" element= {<Desarrolladores/>}/>
        </Routes>
     </BrowserRouter>
     </>
    )
}
}
export default Navegacion;
