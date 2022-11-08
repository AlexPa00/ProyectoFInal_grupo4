import React,{ Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import './GameMemory.css';
import ConstruirBaraja from './utils/ConstruirBaraja';


const getEstadoInicial = ()=> {
  const baraja = ConstruirBaraja();
  return{
    baraja,
    //Propiedad de las parejas de cartas que se estan comparando
    parejaSeleccionada: [], //Este es un array que puede contener un maximo de 2 elementos, ya que podemos comparar dos cartas a la vez.
    estaComparando: false //Declaramos un boolean para que una vez que el usuario elija 2 cartas esta se vuelva "verdadero" mientras que la aplicacion calcula si ambas son iguales.(ya que no se quiere que el usuario pueda seguir eligiendo mientras se esta comparando)
  };
}

class GameMemory extends Component {
  constructor(props){
    super(props);
    this.state=getEstadoInicial();
  }


render() {
  return (
    <div className="App">
      <Header/>
      <Tablero
      baraja={this.state.baraja}
      parejaSeleccionada = {this.state.parejaSeleccionada} //esta siendo comparada, entonces se voltea para ver la carta seleccionada
      seleccionarCarta = {(carta) => this.seleccionarCarta(carta)} // sirve para hacer referencia de la carta seleccionada al voltearla
      />
    </div>
  );
}

seleccionarCarta(carta)
{
  //Condiciones en las que el usuario no podria seleccionar ...
  //--Mientras la aplicacion esta comparando no debemos permitir que el usuario seleccione una carta.
  //--Mientras la carta ya fue seleccionada , es decir, si ya se encuentra en el array de parejas seleccionadas.
  //No queremos que el usuario escoja cartas que ya fueron adivinadas.

  if(this.state.estaComparando || this.state.parejaSeleccionada.indexOf(carta) >-1 || carta.fueAdivinada)
  {
    return; //Si alguna de estas 3 condiciones fueran ciertas , retornara.
  }

  const parejaSeleccionada = [...this.state.parejaSeleccionada,carta]; //actualizamos el arrays de las parejas seleccionadas
  this.setState({
    parejaSeleccionada  //actualizamos el estado que serai la propiedad parejaseleccionada
  })
} 

}


export default GameMemory; 