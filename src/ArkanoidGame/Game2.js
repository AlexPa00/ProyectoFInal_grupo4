export class Game extends Phaser.Scene{

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
