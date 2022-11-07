import shuffle from "lodash.shuffle";
import fontAwesomeClases from "./fontAwesomeClases";
const NUMERO_DE_CARTAS =20;
export default () => {
const fontAwesomeClasses = fontAwesomeClases();
let cartas =[];

while(cartas.length<NUMERO_DE_CARTAS){
    const index = Math.floor(Math.random()*fontAwesomeClasses.length);
    const carta = {
        icono: fontAwesomeClasses.splice(index,1)[0],
        fueAdivinada:false

    };
    cartas.push(carta);
    cartas.push({...carta});
}
return shuffle(cartas) ;
}