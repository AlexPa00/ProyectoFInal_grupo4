import Phaser from "phaser";
import { RestartButton } from "./components/restart-button.js";
export class GameOver extends Phaser.Scene{
    constructor(){
        super({key:"gameOver"});
        this.restartButton= new RestartButton(this);      
    }


    preload(){
       // this.load.audio('faill', 'sounds/fail.ogg');

      this.load.image("gameOver","imagesGamePhaser/Over.png");

        this.load.image('backgroundGO','imagesGamePhaser/gameOverr.png');

        this.restartButton.preload();
    }

    create(){
     //   this.failed = this.sound.add('faill');

        this.add.image(300,240,"backgroundGO");
     //   this.failed.play();
       this.restartButton.create();
        this.gameOverImage=this.add.image(300,446,"gameOver");
    }
}