import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import '../Navegacion.css';
import Inicio from "./Inicio";
import Reglas from "./Reglas";
import Info from "./Info";
import App from "../App";

class Navegacion extends React.Component{
    render(){
    return(
        <>
     <BrowserRouter>
        <div className="PaginaPrincipal">
            <h1 className="Titulo">AHORCADITO</h1>
            <nav>  
            <Link to ='/' className = "Boton" >Inicio</Link>
            <Link to ='/reglas' className = "Boton" >Reglas</Link>
            <Link to ='/info' className = "Boton" >Desarrolladores</Link>
            </nav>
        </div>
    
        <Routes>
            <Route path = "/" element= {<Inicio/>}/>
            <Route path = "juego" element= {<App/>}/>
            <Route path = "reglas" element= {<Reglas/>}/>
            <Route path = "info" element= {<Info/>}/>
        </Routes>
     </BrowserRouter>
     </>
    )
}
}
export default Navegacion;
