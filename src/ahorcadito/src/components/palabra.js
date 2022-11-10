import Letras from './letras';
function Palabra(props) {
    let color = "";
    let nRayas = props.palabra.length;
    let word = "";
    //Colocar todas las rayas
    for (let i = 0; i < nRayas; i++) {
        if (props.listaLetras.includes(props.palabra[i]))
            word += props.palabra[i];
        else
            word += " _ ";
    }

    //Mostramos cual era la palabra del juego, cuando perdemos
    if(props.fallos === 6){
         color = "redTxt";
        word = props.palabra;
    }else{
        color = "greenTxt";
    }

    return (
        <div className="word">
            <h2>{props.frase}</h2>
            <h1 className={color}>{word}</h1>
            <Letras letrasDichas={props.listaLetras} />
        </div>
    )
}
export default Palabra;