export class RestartButton{
    constructor(scene){
        this.relatedScene=scene;
    }
    preload(){
        this.relatedScene.load.image("button","images/AkanoidImages/retry.png" ,{Width:50});//revisar
    }
    create(){
        this.startButton=this.relatedScene.add.image(325,600,"button").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.relatedScene.scene.start("menu");
        });
    }
}