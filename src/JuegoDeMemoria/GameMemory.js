import React,{ Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import './GameMemory.css';
import ConstruirBaraja from './utils/ConstruirBaraja';


const getEstadoInicial = ()=> {
  const baraja = ConstruirBaraja();
  return{
    baraja
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
      />
    </div>
  );
}
}


export default GameMemory;
