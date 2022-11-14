import Phaser, { LEFT } from "phaser";

class Escena extends Phaser.Scene{

    platforms=null; //variable global a la clase
    player= null;
    cursors= null;
    stars= null;
    score = 0;
    scoreText;
    bombs=null;

    preload (){
        this.load.image("sky","Images/DudeImage/sky.png");
        this.load.image("ground","Images/DudeImage/platform.png");
        this.load.image("star","Images/DudeImage/star.png");
        this.load.image("bomb","Images/DudeImage/bomb.png");
        this.load.spritesheet("dude","Images/DudeImage/dude.png",{frameWidth:32,frameHeight:48});
        this.load.spritesheet("bird","Images/DudeImage/birdSprite.png",{frameWidth:16,frameHeight:16});
    }
    
    create (){
        //se crea fondo
        this.add.image(400,300,"sky");
        //se crea plataformas
        this.platforms=this.physics.add.staticGroup();
        this.platforms.create(400,568,"ground").setScale(2).refreshBody();
        this.platforms.create(600,400,"ground");
        this.platforms.create(50,250,"ground");
        this.platforms.create(750,220,"ground");
        //se agrega las estrellas y a dude
        //  this.add.image(400,300,"star");
        //this.add.image(400,300,"bomb");
        this.player = this.physics.add.sprite(100,250,"dude");
        //seteando rebote y choque con los limites del canva
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

      
        //se crea los movimientos (se utilizan en el update)
        this.anims.create({
            key:"left",
            frames:this.anims.generateFrameNumbers("dude",{start:0,end:3}),
            frameRate:10,   //valor estandar
            repeat:-1 //cuando termina de recorrer lo vuelve a repetir
        });
        this.anims.create({
            key:"turn",
            frames:[{key:"dude",frame:4}],  //no hay movimiento 
            frameRate:20,
        });

        this.anims.create({
            key:"right",
            frames:this.anims.generateFrameNumbers("dude",{start:5,end:8}),
            frameRate:10,
            repeat:-1
        });

        //agregando estrellas
        this.stars = this.physics.add.group({
            key:"star",
            repeat:15,// cantidad de estrellas
            setXY:{x:12,y:0,stepX:60}//empieza en 12px y se crea una estrella cada 60px
        });

        //this.stars.setBounce(0.3);
        //esto si genera el rebote del grupo
        this.stars.children.iterate(function(child){
            child.setBounceY(Phaser.Math.FloatBetween(0.4,0.8)); //rebotes entre los valores 0.4 y 0.8
        });


        //rebote contra las plataformas
        this.physics.add.collider(this.player,this.platforms);
        this.physics.add.collider(this.stars,this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();

        //choque de las estrellas con el jugador 
        this.physics.add.overlap(this.player,this.stars,this.collectStar,null,this);//overlap es como "recoger" las estrellas

        //se agrega el text
        this.scoreText = this.add.text(16,16,"score: 0",{fontSize:"32px",fill:"#000"});

       /* // intenar agregar paticular q emitan una estela que siga a dude
         var particles = this.add.particles("red");

        var emmiter = particles.createEmitter({
            speed:300,
            scale:{start:1,end:0},
            blenMode:"MULTIPLY"
        });

        var logo = this.physics.add.image(400,100,"log");

        logo.setVelocity(100,200);
        logo.setBounce(1,1);
        logo.setCollideWorldBounds(true);
        emitter.startFollow(logo);*/

this.bombs = this.physics.add.group();  
this.physics.add.collider(this.bombs, this.platforms);
this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);

    }

 update ()
{
    //movimientos segun el cursor del teclado
    if(this.cursors.left.isDown){
        this.player.setVelocityX(-160);
        this.player.anims.play("left",true);
    }
    else  if(this.cursors.right.isDown){
        this.player.setVelocityX(160);
        this.player.anims.play("right",true);
    } 
    else{
        this.player.setVelocityX(0);
        this.player.anims.play("turn");
    } 
    //saltar si esta en el suelo y la tecla de cursor hacia arriba
    if(this.cursors.up.isDown&&this.player.body.touching.down){
        this.player.setVelocityY(-230);
    }

}




    //collider entre el jugador  
    collectStar(player, star) {
       star.disableBody(true,true);//la estrella desaparece
        this.score +=10;
        this.scoreText.setText("Score:" + this.score);

        if(this.stars.countActive(true)=== 0){
            this.stars.children.iterate(function(child){
                child.enableBody(true,child.x,0,true,true);
            });
          /*  var x =(player.x<400) ? Phaser.Math.Between(400,800) : Phaser.Math.Between(0,400);
            var bomb =this.bombs.create(x,16,"bomb");
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200,200),20);*/
        }
        
    
    }
 
}

export default Escena;