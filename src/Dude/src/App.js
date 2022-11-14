import React from "react";
import Phaser from "phaser";
import { useState, useEffect } from "react";
import Escena from "./components/Escena";

function App() {
  const [listo, setListo] = useState(false);

  useEffect(() => {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 100 },
          debug: false
        }
      },
      scene: [Escena]
    };

    //arranca el juego
    var game = new Phaser.Game(config);
    var bombs;

    //trigger cuando el juego esta completamente listo
    game.events.on("LISTO", setListo)

    //si no pongo esto, se acumulan duplicados del lienzo
    return () => {
      setListo(false);
      game.destroy(true);
    }
  }, [listo]);

}
export default App;

