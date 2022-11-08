import React from "react";
import '../Navegacion.css'

class Desarrollador extends React.Component {
    render() {
        return (          
            <figure className="card">               
                    <img src={this.props.img} className="image"/> 
                    <figcaption>    
                        <h3> {this.props.nombre}</h3>
                        <p><br />
                            <b>Edad:</b> {this.props.edad} <br />
                            <b>Intereses:</b>{this.props.intereses}<br />
                             <a href={this.props.repositorio} target="_blank" className="links"><b>Repositorio Personal</b></a><br />
                        </p>
                </figcaption>     
               
            </figure>
        )
    }
}
export default Desarrollador;