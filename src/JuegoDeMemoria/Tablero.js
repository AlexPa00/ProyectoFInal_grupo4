import React, { Component } from 'react';
import Carta from './Carta'
import './Tablero.css'

export default class Tablero extends Component {
  render() {
    return (
      <div className="tablero">
        {
          this.props.baraja
            .map((carta, index) => { //Si esta carta...
              const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1; //Se encuentra entre la pareja seleccionada, esta siendo comparada..
              return <Carta
                key={index} 
                icono={carta.icono} //Le indicaremos a la carta que esta siendo creada que ...
                estaSiendoComparada={estaSiendoComparada}
                seleccionarCarta={() => this.props.seleccionarCarta(carta)} //La carta que estamos tratando se quedara almacenada en la funcion "seleccionarCarta"
                fueAdivinada={carta.fueAdivinada}
              />;
            })
        }
      </div>
    ); 
  }
};
