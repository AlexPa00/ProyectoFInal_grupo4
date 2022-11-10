import Phaser from "phaser";

export class Game extends Phaser.Scene{
    constructor(){
        super({key:'game'});        
    }


    preload(){
        //realizo una carga de imagenes para usarlo despues
        this.load.image('city','images/City.png');
        this.load.spritesheet('cat', 
        'images/gato.png',
        { frameWidth: 150, frameHeight: 150 }
        );
    }

    create(){
        //agrega colisiones a los bordes del juego
        this.physics.world.setBoundsCollision(true,true,true,false);

        //Muestro las imagenes en la pantalla
        this.add.image(300,240 ,'city');
        this.add.spritesheet(100,100,'cat')
        //


    }
}