import { GameOver1 } from "./GameOver1";
import { GameOver2 } from "./GameOver2";
import { Menu } from "./Menu";
import { Win } from "./Win";
import {Game1} from "./Game1";
import Phaser from "phaser";
import {Game2} from "./Game2";

function App(){
var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Menu,Game1,GameOver1,Game2,GameOver2,Win]
};
var game = new Phaser.Game(config);
}
export default App;