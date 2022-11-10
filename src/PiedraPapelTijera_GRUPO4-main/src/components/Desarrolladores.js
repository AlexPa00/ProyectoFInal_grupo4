import React from 'react';
import Informacion from './Informacion';
import desarrolladores from '../desarrolladores.json';

function Desarrolladores(){
return(
<div className="Desarrolladores">
<header className="Desarrolladores-header">
{desarrolladores.map(des=>
    <Informacion
    img={des.img}
    nombre={des.nombre}
    lu={des.lu}
    descripcion={des.descripcion}
    />
)}
</header>
</div>
)
}

export default Desarrolladores;
