import React from "react";
import "./style.css";

class Desarrollador extends React.Component {
    render() {
        return (          
            <section>
                <div class="card">
                    <img src={this.props.foto} />
                    <div class="content" >
                        <h3> {this.props.nombre}</h3>
                        <p><br />
                            <b>Legajo:</b> {this.props.legajo} <br />
                            <b>Correo:</b>{this.props.correo}<br />
                            <b>Usuario Github:</b> {this.props.github} <br />
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Desarrollador;