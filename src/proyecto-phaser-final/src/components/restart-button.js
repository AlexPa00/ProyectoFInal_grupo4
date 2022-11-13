export class RestartButton{
    constructor(scene){
        this.relatedScene=scene;
    }
    preload(){
        this.relatedScene.load.image("button","imagesGamePhaser/reintentar.png" ,{Width:50});
    }
    create(){
        this.startButton=this.relatedScene.add.image(540,250,"button").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.relatedScene.scene.start("menu");
        });
    }
}