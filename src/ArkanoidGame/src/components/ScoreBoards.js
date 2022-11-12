export class ScoreBoards{
    constructor(scene){
        this.relatedScene = scene;
        this.score=0;
    }
    create(){
        this.scoreText= this.relatedScene.add.text(50,50,'Puntos: 0',{
            fontSize:'20px',
            fill: '#fff',
            fontFamily:'verdana,arial,sans-serif'
        });
    }
    Point(point){
        this.score+=point;
            this.scoreText.setText('Puntos: '+ this.score);
       }
}