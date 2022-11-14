export class RestartButtonLevel2{
    constructor(scene){
        this.relatedScene=scene;
    }
    preload(){
        this.relatedScene.load.image("button1","imagesGamePhaser/reintentar.png" ,{Width:50});
    }
    create(){
        this.startButton=this.relatedScene.add.image(540,250,"button1").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.relatedScene.scene.start("Game2");
        });
    }
}