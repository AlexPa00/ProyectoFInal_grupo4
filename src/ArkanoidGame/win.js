import Phaser from "phaser";
import { RestartButton } from "./components/restart-button";
export class Win extends Phaser.Scene{
    constructor(){
        super({key:"win"});
        this.restartButton=new RestartButton(this);   
    }

    preload(){
        this.load.audio('winner', 'Sounds/ArkanoidSounds/tadda.ogg');
        this.load.image("winn","Images/ArkanoidImages/winn.png");
         this.load.image('backgroundW','Images/ArkanoidImages/FondoWin.png');

        this.restartButton.preload();
    }

    create(){
       //this.win = this.sound.add('winner');
        this.add.image(325,344,"backgroundW");

        //this.win.play();
        this.restartButton.create();
        this.winImage=this.add.image(330,350,"winn");
    }
}