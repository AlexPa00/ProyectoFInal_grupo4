import { GameOver1 } from "./Escenas/GameOver1";
import { GameOver2 } from "./Escenas/GameOver2";
import { Menu } from "./Escenas/menu";
import { Win } from "./Escenas/win";
import { Game1 } from "./Escenas/Game1";
import Phaser from "phaser";
import { Game2 } from "./Escenas/Game2";
import { useState, useEffect } from "react";

function CatRain() {
    const [listo, setListo] = useState(false);

    useEffect(() => {
        var config = {
            type: Phaser.AUTO,
            scale: {
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
                width: 600,
                height: 480,
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: false
                }
            },
            scene: [Menu, Game1, GameOver1, Game2, GameOver2, Win]
        };
        var game = new Phaser.Game(config);
        //trigger cuando el juego esta completamente listo
        game.events.on("LISTO", setListo)

        //si no pongo esto, se acumulan duplicados del lienzo
        return () => {
            setListo(false);
            game.destroy(true);
        }
    }, [listo]);
}
export default CatRain;