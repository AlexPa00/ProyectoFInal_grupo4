
import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import './Carta.css';


export default class Carta extends Component {
  render() {
    return (

    //Una vez que el usuario haga click , se invocara al metodo seleccionarCarta
      <div className="carta" onClick={this.props.seleccionarCarta}>
        <ReactCardFlip
          flipped={this.props.estaSiendoComparada || this.props.fueAdivinada} //Si la carta esta volteada y el usuario esta buscando su par o si ya la adivino, entonces la dejamos volteada.
          disabled={true} //Esto desabilita que la carta se voltee cuando el puntero pase por encima de ella , por lo tanto la carta solo se volteara si hacemos click en ella.
        >
          <div className="portada"></div>
          <div className="contenido">
            <i className={`fa ${this.props.icono} fa-5x`}></i>
          </div>
        </ReactCardFlip>
      </div>
    )
  }  
};