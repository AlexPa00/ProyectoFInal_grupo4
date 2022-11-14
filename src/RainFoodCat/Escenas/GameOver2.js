import Phaser from "phaser";
import { RestartButtonLevel2 } from "../components/restart-button-Level2";
export class GameOver2 extends Phaser.Scene{
    constructor(){
        super({key:"gameOver2"});
        this.restartButtonLevel2= new RestartButtonLevel2(this);      
    }


    preload(){

      this.load.image("gameOver","imagesGamePhaser/Over.png");

        this.load.image('backgroundGO','imagesGamePhaser/gameOverr.png');
        this.load.audio('fail','/sounds/GO1.mp3');

        this.restartButtonLevel2.preload();
    }

    create(){

        this.add.image(300,240,"backgroundGO");
        this.fail = this.sound.add('fail');
        this.fail.play();

       this.restartButtonLevel2.create();
        this.gameOverImage=this.add.image(300,446,"gameOver");
    }
}