import Phaser from "phaser";
import { ScoreBoards } from "./components/ScoreBoards";

export class Game extends Phaser.Scene{
    constructor(){
        super({key:'game'});        
    }

    init()  {
        this.scoreBoard = new ScoreBoards(this);


    }


    preload(){
        // realizo una precarga de las imagenes
            this.load.image('background','images/ArkanoidImages/ArkanoidFondo.png');
            this.load.image('player','images/ArkanoidImages/VausSpacecraftLarge.png');
            this.load.image('ball','images/ArkanoidImages/EnergyBall.png');
            this.load.image('bluewall', 'images/ArkanoidImages/BlueWall.png');
            this.load.image('goldwall', 'images/ArkanoidImages/GoldWall.png');
            this.load.image('greenwall', 'images/ArkanoidImages/GreenWall.png');
            this.load.image('lightbluewall', 'images/ArkanoidImages/LightBluewall.png');
            this.load.image('orangewall', 'images/ArkanoidImages/OrangeWall.png');
            this.load.image('pinkwall', 'images/ArkanoidImages/PinkWall.png');
            this.load.image('redwall', 'images//ArkanoidImagesRedWall.png');
            this.load.image('silverwall', 'images/ArkanoidImages/SilverWall.png');
            this.load.image('whitewall', 'images/ArkanoidImages/WhiteWall.png');
            this.load.image('yellowwall', 'images/ArkanoidImages/YellowWall.png');
    



        //carga de los audios para el juego
        this.load.audio('platformimpactsample', 'sounds/ArkanoidSounds/platform-impact.ogg');
        this.load.audio('brickimpactsample', 'sounds/ArkanoidSounds/brick-impact.ogg');
        this.load.audio('gameoversample', 'sounds/ArkanoidSounds/gameover.ogg');
        this.load.audio('winsample', 'sounds/ArkanoidSounds/you_win.ogg');
        this.load.audio('startgamesample', 'sounds/ArkanoidSounds/start-game.ogg');
        this.load.audio('ambiente', 'sounds/ArkanoidSounds/Ambiente.ogg');

        

        }
    create(){
    //agrega colisiones a los bordes del juego
        this.physics.world.setBoundsCollision(true,true,true,false);

        
    //agrego al jugador y le agrego fisicas y algunas caracteristicas
        this.add.image(325,346,'background');
        this.player =this.physics.add.image(325,650,'player').setImmovable();
        this.player.body.allowGravity = false;
        this.player.setCollideWorldBounds(true);
        this.scoreBoard.create();
        this.brickImpactSample = this.sound.add('brickimpactsample');
        this.platformImpactSample = this.sound.add('platformimpactsample');
        this.ambientes = this.sound.add('ambiente');
        


    

        this.bricks = this.physics.add.staticGroup({
            key: ['bluewall', 'greenwall', 'goldwall', 'whitewall','lightbluewall','orangewall','pinkwall','redwall','silverwall','yellowwall'], 
            frameQuantity: 1, // es el número de elementos para cada uno de los grupos
            gridAlign: { 
              width: 10, //anchura en columnas de la rejilla
              height: 5, //altura en filas de la rejilla
              cellWidth: 50, //tamaño de la celda de rejilla de anchura
              cellHeight: 25, //altura de la celda de la rejilla
              x: 125, //La posición del primer elemento de la rejilla, en la horizontal
              y: 100 //La posición del primer elemento de la rejilla, en la vertical
            }
          });

          
    //
        this.ball =this.physics.add.image(325,600,'ball');
        this.physics.add.collider(this.ball,this.player);
        this.ball.setBounce(1,1);
        this.ball.setCollideWorldBounds(true);
        this.ball.setData('glue', true);
        this.ambientes.play();
        this.ambientes.volume = 0.50;

        
    //  


        this.physics.add.collider(this.ball, this.player, this.playerImpact(this),null,this);
        //colision para todo el grupo de bloques que asignamos
        this.physics.add.collider(this.ball, this.bricks, this.brickImpact, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

        brickImpact(ball, brick ) {
            this.brickImpactSample.play();
            this.scoreBoard.Point(10);
          brick.disableBody(true, true);
          if (this.bricks.countActive()===0){
            this.nivel2();
          }
        }

        playerImpact(){
            this.platformImpactSample.play();
            let relativeImpact = this.ball.x - this.player.x;
            if(relativeImpact > 0) {
                console.log('derecha!');
                this.ball.setVelocityX(10 * relativeImpact);
              } else if(relativeImpact < 0) {
                console.log('izquierda!');
                this.ball.setVelocityX(10 * relativeImpact);
              } else {
                console.log('centro!!');
                this.ball.setVelocityX(Phaser.Math.Between(-30, 30))
              }
        }

       


    
    
    update(){
        // asigno las teclas que usare para el movimiento del jugador con una velocidad fija asignada

        if(this.cursors.left.isDown){
            this.player.setVelocityX(-500);
            if(this.ball.getData('glue')) {
                this.ball.setVelocityX(-500);
              }
        }
        else if(this.cursors.right.isDown){
            this.player.setVelocityX(500);
            if(this.ball.getData('glue')) {
                this.ball.setVelocityX(500);
              }
        }
        else{
            this.player.setVelocityX(0);
            if(this.ball.getData('glue')) {
                this.ball.setVelocityX(0);
              }
        }


        if (this.ball.y>700 & this.ball.active){
            console.log("fin");
            this.ambientes.stop();
            this.showGameOver();
        }
        if (this.cursors.space.isDown) {
            if (this.ball.getData('glue')) {
              this.ball.setVelocity(-60, -300);
              this.ball.setData('glue', false);
            }
          }
          
     
    }  

      showWin(){
        this.scene.start("win");
      }

     showGameOver(){
        this.scene.start("gameOver");
    }

    nivel2(){
      this.scene.start("gameDos")
    }

}
