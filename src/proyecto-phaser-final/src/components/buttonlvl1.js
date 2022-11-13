export class ButtonLvl1{
    constructor(scene){
        this.relatedScene=scene;
    }
    preload(){
        this.relatedScene.load.image("buttonlvl1","imagesGamePhaser/select1.png");
    }
    create(){
        this.startButton=this.relatedScene.add.image(75,220,"buttonlvl1").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.relatedScene.scene.start("App");
        });
    }
}