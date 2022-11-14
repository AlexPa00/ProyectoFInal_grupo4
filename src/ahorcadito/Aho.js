import Image from './components/image';
import Palabra from './components/palabra';
import DATA from './shared/data';
import React, { Component } from 'react';
import styled from 'styled-components';  

const Appstyled = styled.main`
padding:50px;

body{
  margin:0;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing:grayscale;
}

code{font-family:source-code-pro,Menlo,Monaco,Consolas,"Courier New",monospace}*{text-align:center}body{background-color:#f0f8ff}
header img{
  border:none;
  width:30px;
  height:30px;
  margin-left:2%;
  border-radius:5px;
}

h3{
  color:#ff4500;
}

img{
  border:4px solid #000;
  height:300px;
  border-radius:30px;
}

input{
  margin-top:2%;
  padding:.5%;
  font-size:1.5rem;
  width:200px;
  background-color:#e6e6fa;
}

button,input{border-radius:10px}
button{
  background-color:#000;
  margin-top:3vh;
  font-weight:700;
  font-size:2rem;
  color:#fff;
  padding:1vh;
}

button:hover{
  background-color:#00fa9a;
  color:#000;
  cursor:pointer;
}

  input[
    type=text]

  :disabled{
    background-color:azure;
    border-color:#000;
    color:#000;}

input:focus{background-color:#fff}

footer{
  width:100%;
  margin-top:5vh}

.title{
  -webkit-text-stroke:2px #000;
  font-size:7vh;color:orange}

.word{
  width:50%;
  padding:2vh;
  margin:auto auto 2vh;
  -webkit-align-content:center;
  align-content:center;
  border-radius:5px}

.redTxt{
  color:#ff0000}
  
.greenTxt,.redTxt{
  -webkit-text-stroke:2px #763b3b}

.greenTxt{
  color:green}

`

export default class Aho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letras: [],
      datos: JSON.parse(DATA).palabras,
      palabra: "",
      letra: "",
      fallos: 0
    }
  }

  //Devuelve un numero aleatorio entre min y max
  getNumRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  //Obtiene una palabra aleatoria de un array de palabras y poner en juego
  getRandomWord() {
    let max = this.state.datos.length;
    let position = Math.floor(this.getNumRandom(0, max));
    let newWord = this.state.datos[position].palabra;
    this.setState({ palabra: newWord });
  }

  //Permite ejecutar el método getRandomWord() una vez por partida
  componentDidMount() {
    this.getRandomWord();
  }

  //Aumenta el número de fallos en 1
  increaseError() {
    let newFallos = this.state.fallos + 1;
    this.setState({ fallos: newFallos });
  }

  //Si el usuario escribe una letra correcta, se añade a la lista de letras. Si la letra ya está no penaliza
  pushLetra() {
    let newLetra = document.getElementById("letra").value.toUpperCase();
    if (((newLetra >= "A" && newLetra <= "Z") || newLetra === "ñ") && !this.state.letras.includes(newLetra) ) {
      let newLetras = this.state.letras;
      newLetras.push(newLetra);
      this.setState({ letras: newLetras })
      this.errorControl(newLetra)
    }
    document.getElementById("letra").value = "";
  }

  //Método que controla que si la letra que se dice por teclado no está en la palabra, aumente el fallo en 1
  errorControl(letra) {
    if (!this.state.palabra.includes(letra)) {
      this.increaseError();
    }
  }

  //Devuelve true si todas las letras dichas las contiene la palabra, lo que nos dice que el jugador ha ganado
  allSaid() {
    console.log(this.state.palabra.length);
    for (let i = 0; i < this.state.palabra.length; i++) {
      if (!this.state.letras.includes(this.state.palabra[i]))
        return false;
    }
    return true;
  }

  //Se gana cuando los fallos sean < 6 && en letras [] están todas las letras de la palabra (método allSaid())
  win() {
    if (this.state.fallos < 6 && this.allSaid())
      return true;
    return false;
  }

  //Se pierde cuando el número de fallos llega a 6
  gameOver() {
    return this.state.fallos === 6;
  }

  //Método que ejecutará si la partida ha sido ganada o perdida
  finishMsgGame() {
    let msg;
    if (this.gameOver()) {
      msg = <h2 className="redTxt">¡PERDISTE!</h2>
    }

    if (this.win()) {
      msg = <h2 className="greenTxt">¡HAS GANADO!</h2>;
    }
    return msg;
  }

  inicializar() {
    document.getElementById("letra").value = "";
    let resetFallos = 0;
    let resetLetras = [];
    this.getRandomWord();
    this.setState({ letras: resetLetras });
    this.setState({ fallos: resetFallos });
  }

  disabled() {
    if (this.gameOver() || this.win()) {
      return "disabled";
    }
  }

  render() {
    return (
      <Appstyled>
      <div>
        <header>
          <h1 className="title">AHORCADITO<img src="img/ahorcado.jpg" alt="logo" title="logo" /></h1>
        </header>

        <Palabra palabra={this.state.palabra} listaLetras={this.state.letras} frase={this.state.frase} fallos={this.state.fallos} />
        {this.finishMsgGame()}
        <Image fallos={this.state.fallos} />
        <input disabled={this.disabled()} type="text" placeholder="Introducir letra..." name="letra" id="letra" maxLength="1" onKeyUp={() => this.pushLetra()} />
        <div>
          <button onClick={() => this.inicializar()}>Jugar de nuevo</button>
        </div>
      </div>
      </Appstyled>
    )
  }
}

