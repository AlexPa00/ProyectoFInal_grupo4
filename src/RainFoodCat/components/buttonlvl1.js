var click;

export class ButtonLvl1{
    constructor(scene){
        this.relatedScene=scene;
    }
    preload(){
        this.relatedScene.load.image("buttonlvl1","Images/CatFoodRain/imagesGamePhaserCAT/select1.png");
    }
    create(){
        this.startButton=this.relatedScene.add.image(270,390,"buttonlvl1").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.relatedScene.scene.start("Game1");

        });
    }
}