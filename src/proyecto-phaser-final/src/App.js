import { isCursorAtStart } from "@testing-library/user-event/dist/utils";
import Phaser from "phaser";
//import { Game } from "./game";


function App(){
  var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene:{
      preload:preload,
      create:create,
      update:update
    }
  };  
  var game = new Phaser.Game(config);

  
  var cat;

    
    

    function preload(){
        //realizo una carga de imagenes para usarlo despues
        this.load.image('city','images/City.png');
        this.load.atlas("cat","/images/gatos.png","/images/sprites.json");
    }

 function create(){
        //agrega colisiones a los bordes del juego
        this.physics.world.setBoundsCollision(true,true,true,false);

        //Muestro las imagenes en la pantalla
        this.add.image(300,240 ,'city');
        // genera la animacion del jugador mediante una matriz
      this.anims.create({key: 'walk' ,  
        frames: this.anims.generateFrameNames('cat',  //usamos un metodo generateFrameNames en donde se especifica el recurso que en est ocasion seria cat
        { prefix: 'walk', end: 3}), //vendria siendo como una cadena
        repeat: -1});
         // se utiliza el repeat en menos 1 para que se repita indefinidamente el movimiento
       cat = this.physics.add.sprite(100,200,'cat');
        this.physics.add.collider(cat);
        this.anims.framesRate = 10;
        this.cursors = this.input.keyboard.createCursorKeys();

    } 
     function update(){
     
      if(this.cursors.left.isDown){
       cat.setVelocityX(50);
       cat.anims.play('walk');
      }


            }        
          } 
    


export default App;