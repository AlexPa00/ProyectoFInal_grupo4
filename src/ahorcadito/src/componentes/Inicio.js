import React from 'react';
import '../Navegacion.css'
import {Link} from 'react-router-dom';
import Imagen from '../img/AHORCADITO1.png';

function Inicio(){
    return(
        <>
         <section className='Animacion'>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
        </section>

         <section className="IMG-TEXTO">
        <div className="Centro">
            <h2 className="Titulo2">Bienvenido</h2>
            <h2 className="Titulo3">¡Disfruta este Juego!</h2>
            <Link to ='/juego' className = "Jugar" >Jugar</Link>
        </div>
        <div className='IMG'>
        <img src={Imagen} alt="" className="Imagen" />
        </div>
        </section>

        </>
    )
}
export default Inicio;