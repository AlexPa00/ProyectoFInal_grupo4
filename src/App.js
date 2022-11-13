import logo from './logo.svg';
import imagen1 from "./img/AHORCADITO1.png";
import imagen2  from "./img/JuegoComida1.png";
import imagen3 from "./img/Arkkanoid.png";
import imagen4  from "./img/PiedraPapel.png";
import imagen5 from "./img/Memoria.png";
 
 
import './App.css';

function App() {
  
    return(

        <main > 
 
 <div className="cards">  
       
 <img src=  {imagen1} alt="" className="imagen" /> 
     
 <h1 className="titulo">Ahorcadito</h1>

<button> Jugar </button>

</div>

 
<div className="cards2">
       
       <img src=  {imagen2} alt="" className="imagen" /> 
           
       <h1 className="titulo">AtrapaComida</h1>
      
      <button> Jugar </button>
      
      </div>

      <div className="cards3">
       
       <img src=  {imagen3} alt="" className="imagen" /> 
           
       <h1 className="titulo">Arkkanoid</h1>
      
      <button> Jugar </button>
      
      </div>

      <div className="cards4">
       
       <img src=  {imagen4} alt="" className="imagen" /> 
           
       <h1 className="titulo">Pi Pa Ti</h1>
      
      <button> Jugar </button>
      
      </div>

      <div className="cards5">
       
       <img src=  {imagen5} alt="" className="imagen" /> 
           
       <h1 className="titulo">Memoria</h1>
      
      <button> Jugar </button>
      
      </div>

</main>

)
    }
 

export default App;