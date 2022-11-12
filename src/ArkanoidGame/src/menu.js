import Phaser from "phaser";
import { ButtonLvl1 } from "./components/buttonlvl1.js";
import { ButtonLvl2 } from "./components/buttonlvl2.js";
export class Menu extends Phaser.Scene{
    constructor(){
        super({key:'menu'});     
        this.buttonLvl1=new ButtonLvl1(this)  
        this.buttonLvl2=new ButtonLvl2(this)   
    }

    preload(){
        this.load.image('backgroundM','images/FondoMenu.png');
        this.load.image('tittle','images/arkanoid.png');
        this.buttonLvl1.preload();
        this.buttonLvl2.preload();
        
        }
    create(){
        this.add.image(325,346,'backgroundM');
        this.add.image(325,200,'tittle');
        this.buttonLvl1.create();
        this.buttonLvl2.create();
     
 
    }

 

}
