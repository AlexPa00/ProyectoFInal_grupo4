import imagen1 from "./MenuImages/AHORCADITO1.png";
import imagen2  from "./MenuImages/JuegoComida1.png";
import imagen3 from "./MenuImages/Arkkanoid.png";
import imagen4  from "./MenuImages/PiedraPapel.png";
import imagen5 from "./MenuImages/Memoria.png";
import {Link} from 'react-router-dom';
 
import './App.css';

function App() {
 
    return(

      
        <main > 
 
 <div className="Centro">
            <h2 className="Titulo2">Bienvenido</h2>
             <Link to = '/'><button className='button'> COLABORADORES </button></Link>
           
        </div>
 
 <div className="cards">  
       
 <img src=  {imagen1} alt="" className="imagen" /> 
     
 <h1 className="titulo">Ahorcadito</h1>

 <Link to ='/Ahorcadito' className = "button" >ahorcadito</Link>

</div>

 
<div className="cards2">
       
       <img src=  {imagen2} alt="" className="imagen" /> 
           
       <h1 className="titulo">AtrapaComida</h1>
      
       <Link to ='/AtrapaComida' className = "button" >AtrapaComida</Link>
      
      </div>

      <div className="cards3">
       
       <img src=  {imagen3} alt="" className="imagen" /> 
           
       <h1 className="titulo">Arkkanoid</h1>
      
       <Link to ='/Arkkanoid' className = "button" >Arkkanoid</Link>
      
      </div>

      <div className="cards4">
       
       <img src=  {imagen4} alt="" className="imagen" /> 
           
       <h1 className="titulo">PiedraPapelTijera</h1>
      
       <Link to ='/PiPaTi' className = "button" >Pied-Papel-Tij</Link>
      
      </div>

      <div className="cards5">
       
       <img src=  {imagen5} alt="" className="imagen" /> 
           
       <h1 className="titulo">Memoria</h1>
      
       <Link to ='/JuegoMemoria' className = "button" >JuegoMemoria</Link>
      
      </div>

</main>

)
    }
 

export default App;