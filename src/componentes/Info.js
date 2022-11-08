import React from "react";
import Desarrollador from "./Desarrollador";
import desarrolladores from '../json/desarrolladores.json';
import '../Style.css'


 function Info(){
    return(
        <div className="boxContainer"> 
        {desarrolladores.map(des=>
           <Desarrollador
            img={des.img}
            nombre={des.nombre}
            edad={des.edad}
            intereses={des.intereses}
            repositorio={des.repositorio}
            ></Desarrollador>
        )}
        
        </div>
    )
}
export default Info;

