import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from "./App";
import reportWebVitals from './reportWebVitals';
//import App from "./App";
import "font-awesome/css/font-awesome.css"//iconosdecartas
import Navegacion from './Navegacion';
/*import DudeGame from './Dude/DudeGame';//nice very nice
import Aho from './ahorcadito/Aho';//le falta una imagen xdd
import Ark from "./ArkanoidGame/Ark";//REVISAR ESCENA DE WIN
import GameMemory from "./JuegoDeMemoria/GameMemory";//goood
import PPT from './PiedraPapelTijera/components/PPT';//le falta direccionar los iconos de pidera papel y tijera
import CatRain from './RainFoodCat/CatRain';//FALTA LEVEL 2*/





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Navegacion />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
//a or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

