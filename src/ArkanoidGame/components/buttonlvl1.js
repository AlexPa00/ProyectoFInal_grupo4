export class ButtonLvl1{
    constructor(scene){
        this.relatedScene=scene;
    }
    preload(){
        this.relatedScene.load.image("buttonlvl1","images/ArkanoidImages/lvl1.png");
    }
    create(){
        this.startButton=this.relatedScene.add.image(365,450,"buttonlvl1").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.relatedScene.scene.start("game");
        });
    }
}