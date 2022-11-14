import Phaser from "phaser";
  
  
  var cat;
  var eat;
  var bombBomb;
  var text;
  var takeEat;
  var error;
  var nivel2;

  //Agregacion de constantes
    
    var velocityCat = 100;
    var minEatCat = 2;
    var maxEatCat = 4;
    var velocidadEat = 4;
    var TimeReturnEat = 600;
    var probabilityBomb = 70; //Probabilidad de que aparezca una bomba del 50%
    var vida = 2;
    var puntaje = 0;
    var nivel = 0;

    export var Game2 = new Phaser.Class({

    Extends: Phaser.Scene,
  
    initialize:
  
        function Game2() {
            Phaser.Scene.call(this, { key: 'Game2' });
        },

         preload(){
            //realizo una carga de imagenes para usarlo despues
            this.load.image('city2','Images/CatFoodRain/Catimages/LV2.png');
            this.load.atlas("cat","/Images/CatFoodRain/Catimages/gatos.png","/Images/CatFoodRain/Catimages/sprites.json");
            this.load.spritesheet("eat1","/Images/CatFoodRain/Catimages/EATCatCat3.png",{frameWidth: 45.11,frameHeigth: 48});
            this.load.image('bomb','Images/CatFoodRain/Catimages/bomb.png');
            this.load.atlas('cats','/Images/CatFoodRain/Catimages/idle1.png','/Images/CatFoodRain/Catimages/idlesprites.json');
            this.load.audio('takeEat','/sounds/Catsounds/Eat1.mp3');
            this.load.audio('error','/sounds/Catsounds/ERRORBOMB1.mp3');
            this.load.audio('nivel2','/sounds/CatsoundsNivel2.0.mp3');
        },
    
         create(){
    
            //agrega colisiones a los bordes del juego
            this.physics.world.setBoundsCollision(true,true,true,false);
    
            //CREACION DE LAS IMAGENES Y CREACION DE ANIMACIONES
    
            //Muestro las imagenes en la pantalla
            this.add.image(300,240 ,'city2');
            // genera la animacion del jugador mediante una matriz
          this.anims.create({key: 'walk' ,  
            frames: this.anims.generateFrameNames('cat',  //usamos un metodo generateFrameNames en donde se especifica el recurso que en est ocasion seria cat
            { prefix: 'walk', end: 7}), //vendria siendo como una cadena
            repeat: -1}); // se repite indefinidamente
    
            // genera la animacion del jugador mediante una matriz
            this.anims.create({key: 'idle' ,  
            frames: this.anims.generateFrameNames('cats',  //usamos un metodo generateFrameNames en donde se especifica el recurso que en est ocasion seria cats
            { prefix: 'idle', end: 4}), //vendria siendo como una cadena
            repeat: -1}); // se utiliza el repeat en menos 1 para que se repita indefinidamente el movimiento
    
            //SONIDOS
            takeEat = this.sound.add('takeEat');
            error = this.sound.add('error');
            nivel2 = this.sound.add('nivel2');
            nivel2.loop = true;
            nivel2.play();
    
    
            // mostramos los datos en la pantalla mediante un texto
            text = this.add.text(10, 10, '', { font: '24px Courier', fill: '#00ff00' });
            this.actualizarTexto(); //Llamamos a la funcion actualizarTexto
    
            // agrego fisicas al componente cat
            cat = this.physics.add.sprite(300,450,'cat',); 
            
            // agrego colisiones al sprite 
           this.physics.add.collider(cat);
    
            //realizamos la colisiones con el mundo;
            cat.setCollideWorldBounds(true);
          
            //creamos las asignaciones de la teclas
           this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
           this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    
    
    
           //Creamos un nuevo grupo
            eat = this.physics.add.group({ 
            defaultKey: 'eat1', //Carga del sprite de comida
            frame: 0, //El numero de frame 
            maxSize:600 //Cantidad de comida que podran almacenarse al mismo tiempo
           });
    
           //Creamos un nuevo grupo
            bombBomb = this.physics.add.group({ 
            defaultKey: 'bomb', //Carga de la imagen de la bomba
            maxSize:120 //Cantidad de bombas que podran almacenarse al mismo tiempo
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
    
    
        },
          update(){
           
          if(/*this.cursors.left*/this.left.isDown){
               cat.flipX = -1; //volteo al sprite cat
               cat.setVelocityX(- velocityCat); //toma una velocidad que esta comprendida en la variable
               cat.anims.play('walk',true); // una vez que entre en la condicional iniciamos la animacion walk
                } 
                
                
          else if(this.right.isDown){
             cat.scaleX = 1; //volteo al sprite cat
             cat.setVelocityX(+ velocityCat); // toma la velocidad que esta comprendida dentro de la variable        
             cat.anims.play('walk',true); // una vez que entre en la condicional iniciamos la animacion walk
           }
    
          else{
            
            cat.setVelocityX(0); //la velocidad se convierte en nula o cero
            cat.anims.play('idle',true); // i no entra en ninguna condicional iniciamos la animacion idle
            cat.flipX = 0;
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
    
         
         },
     
    
           // -- CREACION DE COMIDA --
    
           generateEat(){
            this.CantidadeatCat = Phaser.Math.Between(minEatCat,maxEatCat); //Numero de comida por linea y es aleatorio entre el min y max de la comida
    
            for (let i = 0; i < this.CantidadeatCat; i++) { //Se repetira de acuerdo al numero que nos dio aleatoriamente
             var eatCat = eat.get(); //Llamamos a una comida de nuestro grupo
     
             if(eatCat){ //Si la comida esta disponible...
               eatCat.setActive(true).setVisible(true); //Las activamos y mostramos
               eatCat.setFrame(Phaser.Math.Between(0,8)); //A la comida le asignaremos un frame aleatorio entre 0 y 8
               eatCat.y = -100; //Ubicacion en y
               eatCat.x = Phaser.Math.Between(0,600); //Ubicacion en x aleatoria entre 0 y el ancho del juego
               
               this.physics.add.overlap(eatCat,eat,(eatEnColision) => { //Si detecta que una comida esta colisionando con otra ya existente , haremos que la comida que colisiona se vuelva a otra posicion en x hasta que no colisione con otra.
                 eatEnColision.x = Phaser.Math.Between(0,600);
               });
             }
            }
    
            // - - CREACION DE BOMBA --
    
            var numberProbability =  Phaser.Math.Between(2,20);
            if (numberProbability <= probabilityBomb) {
              var verBomba = bombBomb.get();
              if (verBomba) {
                verBomba.setActive(true).setVisible(true);
                verBomba.y = -100;
                verBomba.x = Phaser.Math.Between(0,600);
    
                this.physics.add.overlap(verBomba,eat,(bombEnColision) => { //Si detecta que una comida esta colisionando con otra ya existente , haremos que la comida que colisiona se vuelva a otra posicion en x hasta que no colisione con otra.
                  bombEnColision.x = Phaser.Math.Between(0,600);
                });
              }
    
              
            }
    
          },
    
          //Colision de la comida con el gato
    
           colisionCatComida(cat,eatCat){ //Cuando el gato colisione con la comida ...
            if (eatCat.active) { //Y si y solo si la comida se encuentra activa , entonces pasara esto...
              eat.killAndHide(eatCat);
              eatCat.setActive(false);
              eatCat.setVisible(false);
              takeEat.play();
              puntaje += 20; //El puntaje aumentara de 20 en 20
            }
            if(puntaje == 400){ //de prueba
              this.scene.pause();
              nivel2.stop();
              this.scene.start("win");
              vida = 3;
              puntaje = 0;
              
    
    
            }
            this.actualizarTexto('Score'); //Actualizaremos el Score
          },
    
          //Colision de la bomba con el gato
    
    
          colisionCatBomb(cat,verBomba){ //Cuando el gato colisione con la bomba ...
            if (verBomba.active) {//Y si y solo si la bomba se encuentra activa , entonces pasara esto...
              bombBomb.killAndHide(verBomba);
              verBomba.setActive(false);
              verBomba.setVisible(false);
              error.play();
              if (vida > 0) { //Se agrega este condicional para evitar que la vida sea negativa
                vida --; //Restaremos de 1 en 1 la vida 
              }
              if(vida==0){//de prueba
                this.scene.pause();
                nivel2.stop();
                this.scene.start("gameOver2");
                vida = 2;
                puntaje = 0;
              }
              this.actualizarTexto('Lives'); //Actualizaremos la vida
            }
          },
    
           actualizarTexto(){
            text.setText([
              'Level:' + nivel,
              'Lives:'+ vida,
              'Score:'+ puntaje
          ]);

        
    },
});  