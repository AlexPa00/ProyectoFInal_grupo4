import Phaser from "phaser";
import { RestartButton } from "./components/restart-button.js";
export class GameOver extends Phaser.Scene{
    constructor(){
        super({key:"gameOver"});
        this.restartButton= new RestartButton(this);      
    }


    preload(){
        this.load.audio('faill', 'sounds/fail.ogg');

        this.load.image("gameOver","images/game-over.png");

        this.load.image('backgroundGO','images/FondoGameOver.png');

        this.restartButton.preload();
    }

    create(){
        this.failed = this.sound.add('faill');

        this.add.image(325,344,"backgroundGO");
        this.failed.play();
       this.restartButton.create();
        this.gameOverImage=this.add.image(330,315,"gameOver");
    }
}