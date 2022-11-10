import React from "react";
import imagen1 from "../img/imagen1.jpg";
import imagen2 from "../img/imagen2.jpg";
import imagen3 from "../img/imagen3.jpg";
import imagen4 from "../img/imagen4.jpg";
import imagen5 from "../img/imagen5.jpg";
import "./reglas.css";
 

class Reglas extends React.Component{
    render(){
        return(

            <main >
 
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

         <div className="cards">
           
            <img src=  {imagen1} alt="" className="imagen" /> 
                  
            <h1 className="titulo">Regla 1</h1>
            
            <p className="descripcion">Debes adivinar que palabra se oculta en este juego, seleccionando una a una las letras que la componen.</p>
         </div>

         /**cards2 */
          

           <div className="cards2">
  
           <img src=  {imagen2} alt="" className="imagen" /> 
         
           <h1 className="titulo">Regla 2</h1>
   
           <p className="descripcion"> Si la letra que seleccionas es parte de  la palabra, aparecera en su lugar correspondiente.</p>
           </div>

           /**cards 3*/
          

          <div className="cards3">
 
          <img src=  {imagen3} alt="" className="imagen" /> 
        
          <h1 className="titulo">Regla 3</h1>
  
          <p className="descripcion"> Si la letra seleccionada no es parte de la palabra, aparecera una parte del dibujo del ahorcado.</p>
          </div>

          /**cards 4*/
          

          <div className="cards4">
 
          <img src=  {imagen4} alt="" className="imagen" /> 
        
          <h1 className="titulo">Regla 4</h1>
  
          <p className="descripcion"> Si logras descubrir la palabra antes de que se complete la figura del ahorcado,ganas. </p>
          </div>

          /**cards 5*/
          

          <div className="cards5">
 
          <img src=  {imagen5} alt="" className="imagen" /> 
        
          <h1 className="titulo">Regla 5</h1>
  
          <p className="descripcion"> Si la figura del ahorcado se completa antes de que descubras la palabra,pierdes.</p>
          </div>
 
         </main> 
        )
    }
}

export default Reglas;