import Phaser from "phaser";
import { RestartButtonLevel1 } from "../components/restart-button-Level1";
export class GameOver1 extends Phaser.Scene{
    constructor(){
        super({key:"gameOver1"});
        this.restartButtonLevel1= new RestartButtonLevel1(this);      
    }


    preload(){

      this.load.image("gameOver","Images/CatFoodRain/imagesGamePhaser/Over.png");

        this.load.image('backgroundGO','Images/CatFoodRain/imagesGamePhaser/gameOverr.png');
        this.load.audio('fail','/sounds/Catsounds/GO1.mp3');

        this.restartButtonLevel1.preload();
    }

    create(){

        this.add.image(300,240,"backgroundGO");
        this.fail = this.sound.add('fail');
        this.fail.play();

       this.restartButtonLevel1.create();
        this.gameOverImage=this.add.image(300,446,"gameOver");
    }
}