import Phaser from "phaser";
import { RestartButton } from "./components/restart-button";
export class Win extends Phaser.Scene{
    constructor(){
        super({key:"win"});
        this.restartButton=new RestartButton(this);   
    }

    preload(){
        //this.load.audio('winner', 'sounds/tadda.ogg');
        this.load.image("winn","imagesGamePhaser/winneryou.png");
         this.load.image('backgroundW','imagesGamePhaser/Win.png');

        this.restartButton.preload();
    }

    create(){
       //this.win = this.sound.add('winner');
        this.add.image(300,240,"backgroundW");

        //this.win.play();
        this.restartButton.create();
        this.winImage=this.add.image(300,48,"winn");
    }
}
//Listo