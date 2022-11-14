import Phaser from "phaser";
import { Game } from "./game";
import { GameDos } from "./gameDos";
import{GameOver} from "./gameOver";
import{Win} from "./win";
import{Menu} from "./menu";
import { useState, useEffect } from "react";

function Ark(){
  const [listo, setListo] = useState(false);
  useEffect(() => {
  var config = {
    type: Phaser.AUTO,
    scale:{
  autoCenter:Phaser.Scale.CENTER_HORIZONTALLY,
    width: 650,
    height: 692,},
    
    scene:[Menu,Game,GameDos,GameOver,Win],    
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
  }

var game = new Phaser.Game(config);
 //trigger cuando el juego esta completamente listo
 game.events.on("LISTO", setListo)

 //si no pongo esto, se acumulan duplicados del lienzo
 return () => {
   setListo(false);
   game.destroy(true);
 }
}, [listo]);




}
export default Ark;