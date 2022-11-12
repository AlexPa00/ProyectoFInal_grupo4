export class ButtonLvl2{
    constructor(scene){
        this.relatedScene=scene;
    }
    preload(){
        this.relatedScene.load.image("buttonlvl2","images/lvl2.png");
    }
    create(){
        this.startButton=this.relatedScene.add.image(350,550,"buttonlvl2").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.relatedScene.scene.start("gameDos");
        });
    }
}