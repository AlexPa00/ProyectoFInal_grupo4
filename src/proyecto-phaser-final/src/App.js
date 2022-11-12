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
      update:update,
      extend: {
        generateEat:generateEat,
        colisionCatComida:colisionCatComida,
        colisionCatBomb:colisionCatBomb
      }
    }
  };  
  var game = new Phaser.Game(config);

  
  var cat;
  var eat;
  var bombBomb;

  //Agregacion de constantes
    
    const velocityCat = 50;
    const minEatCat = 2;
    const maxEatCat = 4;
    const velocidadEat = 4;
    const TimeReturnEat = 600;
    const probabilityBomb = 50; //Probabilidad de que aparezca una bomba del 50%

    function preload(){
        //realizo una carga de imagenes para usarlo despues
        this.load.image('city','images/City.png');
        this.load.atlas("cat","/images/gatos.png","/images/sprites.json");
        this.load.spritesheet("eat","/images/EatCatCat1.png",{frameWidth: 45.25,frameHeigth: 47});
        this.load.image('bomb','images/bomb.png');
    }

 function create(){

        //agrega colisiones a los bordes del juego
        this.physics.world.setBoundsCollision(true,true,true,false);

        //Muestro las imagenes en la pantalla
        this.add.image(300,240 ,'city');
        // genera la animacion del jugador mediante una matriz
      this.anims.create({key: 'walk' ,  
        frames: this.anims.generateFrameNames('cat',  //usamos un metodo generateFrameNames en donde se especifica el recurso que en est ocasion seria cat
        { prefix: 'walk', end: 8}), //vendria siendo como una cadena
        repeat: -1});
         // se utiliza el repeat en menos 1 para que se repita indefinidamente el movimiento
       cat = this.physics.add.sprite(300,450,'cat',); // agrego fisicas al 
        this.physics.add.collider(cat);
       // this.cursors = this.input.keyboard.createCursorKeys();
       this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
       this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);



        eat = this.physics.add.group({ //Creamos un nuevo grupo
        defaultKey: 'eat', //Carga del sprite de comida
        frame: 0, //El numero de frame 
        maxSize:1000 //Cantidad de comida que podran almacenarse al mismo tiempo
       });

       bombBomb = this.physics.add.group({ //Creamos un nuevo grupo
        defaultKey: 'bomb', //Carga de la imagen de la bomba
        maxSize:50 //Cantidad de bombas que podran almacenarse al mismo tiempo
       });



       //Aparicion de la comida

       this.time.addEvent({
        delay: TimeReturnEat, //Apareceran cada 600 mls
        loop: true, //Lo colocamos en verdadero para que se repita
        callback: () =>{ this.generateEat()} //Evento que hara , es generar la comida
       });

       //Colision de Cat y comida
       this.physics.add.collider(cat,eat,this.colisionCatComida,null,this);

       //Colision de Cat y bomba
       this.physics.add.collider(cat,bombBomb,this.colisionCatBomb,null,this);


    } 
     function update(){

      cat.setVelocityX(0);
  
        
      if(/*this.cursors.left*/this.left.isDown){
        cat.setVelocityX(- velocityCat);
        //cat.anims.play('walk');
       }else if(this.right.isDown){
         cat.setVelocityX(- velocityCat);
         //cat.anims.play('walk');
       }

 //Caida de Comida

 Phaser.Actions.IncY(eat.getChildren(),velocidadEat);

 //Caida de Bomba
 Phaser.Actions.IncY(bombBomb.getChildren(),velocidadEat);

 //Retorno de la comida una vez que llego a la base del juego


 /*eat.children.iterate(function (eat) {
 if (eat.y > 550) {
   eat.killAndHide(eat);
 }
});*/

     
}
            
            
       // -- CREACION DE COMIDA --

        function generateEat() {
        this.CantidadeatCat = Phaser.Math.Between(minEatCat,maxEatCat); //Numero de comida por linea y es aleatorio entre el min y max de la comida

        for (let i = 0; i < this.CantidadeatCat; i++) { //Se repetira de acuerdo al numero que nos dio aleatoriamente
         var eatCat = eat.get(); //Llamamos a una comida de nuestro grupo
 
         if(eatCat){ //Si la comida esta disponible...
           eatCat.setActive(true).setVisible(true); //Las activamos y mostramos
           eatCat.setFrame(Phaser.Math.Between(0,8)); //A la comida le asignaremos un frame aleatorio entre 0 y 8
           eatCat.y = -100; //Ubicacion en y
           eatCat.x = Phaser.Math.Between(0,game.config.width); //Ubicacion en x aleatoria entre 0 y el ancho del juego
           
           this.physics.add.overlap(eatCat,eat,(eatEnColision) => { //Si detecta que una comida esta colisionando con otra ya existente , haremos que la comida que colisiona se vuelva a otra posicion en x hasta que no colisione con otra.
             eatEnColision.x = Phaser.Math.Between(0,game.config.width);
           });
         }
        }

        // -- CREACION DE BOMBA --

        var numberProbability =  Phaser.Math.Between(2,70);
        if (numberProbability <= probabilityBomb) {
          var verBomba = bombBomb.get();
          if (verBomba) {
            verBomba.setActive(true).setVisible(true);
            verBomba.y = -100;
            verBomba.x = Phaser.Math.Between(0,game.config.width);

            this.physics.add.overlap(verBomba,eat,(bombEnColision) => { //Si detecta que una comida esta colisionando con otra ya existente , haremos que la comida que colisiona se vuelva a otra posicion en x hasta que no colisione con otra.
              bombEnColision.x = Phaser.Math.Between(0,game.config.width);
            });
          }

          
        }

      }

      //Colision de la comida con el gato

      function colisionCatComida(cat,eatCat){
        eat.killAndHide(eatCat);
        eatCat.setActive(false);
        eatCat.setVisible(false);
      }

      //Colision de la bomba con el gato


      function colisionCatBomb(cat,verBomba){
        bombBomb.killAndHide(verBomba);
        verBomba.setActive(false);
        verBomba.setVisible(false);
      }
          } 
    


export default App;