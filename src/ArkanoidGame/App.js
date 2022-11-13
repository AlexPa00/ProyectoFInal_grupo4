import Phaser from "phaser";
import { Game } from "./game";
import { GameDos } from "./gameDos";
import{GameOver} from "./gameOver";
import{Win} from "./win";
import{Menu} from "./menu";

function App(){
  var config = {
    type: Phaser.AUTO,
    width: 650,
    height: 692,
    scene:[Menu,Game,GameDos,GameOver,Win],    
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
  }

var game = new Phaser.Game(config);




}
export default App;