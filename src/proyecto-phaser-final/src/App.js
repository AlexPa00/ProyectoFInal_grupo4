import Phaser from "phaser";
import { Game } from "./game";


function App(){
  var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 480,
    scene:[Game],    
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