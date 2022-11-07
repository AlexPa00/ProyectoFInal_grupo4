import react, {Component} from "react";
import "./Header.css";

export default class Header extends Component{
    render (){
        return(
            <header>
                <div className="titulo">Juego-Memoria</div>
                <div>
                    <button className="boton-Reiniciar">
                        Reiniciar
                    </button>
                </div>
                <div className="titulo">
                    Intento:
                </div>
            </header>
        )
    }
}