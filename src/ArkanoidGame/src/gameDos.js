import Phaser from "phaser";
import { ScoreBoards } from "./components/ScoreBoards";
export class GameDos extends Phaser.Scene{
    constructor(){
        super({key:'gameDos'});    
    }

    init()  {
        this.scoreBoard = new ScoreBoards(this);
    }


    preload(){
        // realizo una precarga de las imagenes
        this.load.image('background','images/Fondo.png');
        this.load.image('player','images/VausSpacecraftLarge.png');
        this.load.image('ball','images/EnergyBall.png');
        this.load.image('bluewall', 'images/BlueWall.png');
        this.load.image('pinkwall', 'images/PinkWall.png');
        this.load.image('greenwall', 'images/GreenWall.png');
        this.load.image('lightbluewall', 'images/LightBluewall.png');
        this.load.image('orangewall', 'images/OrangeWall.png');
        this.load.image('goldwall', 'images/GoldWall.png');
        this.load.image('redwall', 'images/RedWall.png');
        this.load.image('silverwall', 'images/SilverWall.png');
        this.load.image('whitewall', 'images/WhiteWall.png');
        this.load.image('yellowwall', 'images/YellowWall.png');


        //carga de los audios para el juego
        this.load.audio('platformimpactsample', 'sounds/platform-impact.ogg');
        this.load.audio('brickimpactsample', 'sounds/brick-impact.ogg');
        this.load.audio('gameoversample', 'sounds/gameover.ogg');
        this.load.audio('winsample', 'sounds/you_win.ogg');
        this.load.audio('startgamesample', 'sounds/start-game.ogg');
        
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

    

        this.bricks = this.physics.add.staticGroup({
            key: ['bluewall', 'greenwall', 'goldwall', 'whitewall','lightbluewall','orangewall','pinkwall','redwall','silverwall','yellowwall'], 
            frameQuantity: 7, // es el número de elementos para cada uno de los grupos
            gridAlign: { 
              width: 10, //anchura en columnas de la rejilla
              height: 8, //altura en filas de la rejilla
              cellWidth: 50, //tamaño de la celda de rejilla de anchura
              cellHeight: 25, //altura de la celda de la rejilla
              x: 100, //La posición del primer elemento de la rejilla, en la horizontal
              y: 110 //La posición del primer elemento de la rejilla, en la vertical
            }
          });

          
    //
        this.ball =this.physics.add.image(325,600,'ball');
        this.physics.add.collider(this.ball,this.player);
        this.ball.setBounce(1,1);
        this.ball.setCollideWorldBounds(true);
        this.ball.setData('glue', true);
        
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
          if (this.bricks.countActive()=== 0){
            this.showWin();
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
                this.ball.setVelocityX(Phaser.Math.Between(-50, 50))
              }
        }

        update() {
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
              this.showGameOver();
          }
          if (this.cursors.space.isDown) {
              if (this.ball.getData('glue')) {
                this.ball.setVelocity(-60, -300);
                this.ball.setData('glue', false);
              }
            }
            
       
      }  
      
        showWin() {
          this.scene.start("win");
        }
      
       showGameOver() {
          this.scene.start("gameOver");
      } 
      
      }
    

    
    

