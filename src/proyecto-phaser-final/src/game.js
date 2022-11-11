/*import Phaser from "phaser";

export class Game extends Phaser.Scene{
    constructor(){
        super({key:'game'});        
    }

function game(){
    var cat;
    
}
    preload(){
        //realizo una carga de imagenes para usarlo despues
        this.load.image('city','images/City.png');
        this.load.atlas("cat","/images/cats.png","/images/sprites.json");
    }

 create(){
        //agrega colisiones a los bordes del juego
        this.physics.world.setBoundsCollision(true,true,true,false);

        //Muestro las imagenes en la pantalla
        this.add.image(300,240 ,'city');
        // genera la animacion del jugador mediante una matriz
      var cat = this.anims.create({key: 'walk' ,  
        frames: this.anims.generateFrameNames('cat',  //usamos un metodo generateFrameNames en donde se especifica el recurso que en est ocasion seria cat
        { prefix: 'walk', end: 3}), //vendria siendo como una cadena
        repeat: -1});
         // se utiliza el repeat en menos 1 para que se repita indefinidamente el movimiento
        this.physics.add.sprite(100,200,'cat');
        this.physics.add.collider(cat);

    } 
     update(){
           


            }
        }
          




    }
}
*/