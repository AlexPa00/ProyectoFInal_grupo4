export class ButtonLvl2{
    constructor(scene){
        this.relatedScene=scene;
    }
    preload(){
        this.relatedScene.load.image("buttonlvl2","imagesGamePhaser/select2.png");
    }
    create(){
        this.startButton=this.relatedScene.add.image(360,390,"buttonlvl2").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.relatedScene.scene.start("Game2");
        });
    }
}