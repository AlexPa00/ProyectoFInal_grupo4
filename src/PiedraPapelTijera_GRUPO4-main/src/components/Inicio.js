import React from 'react';
import '../Navegacion.css'
import Principal from '../img/1.png';
import Principal2 from '../img/2.png';
import Principal3 from '../img/3.png';


function Inicio(){
    return(
        <>
        <section>
        <img src={Principal} alt="" className='Icono1'/>
        </section>
        <img src={Principal2} alt="" className='Icono2'/>
        <img src={Principal3} alt="" className='Icono3'/>
        <section className='Animacion'>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>
            <div className='Decoracion'></div>

        </section>
        </>
    )
}
export default Inicio;