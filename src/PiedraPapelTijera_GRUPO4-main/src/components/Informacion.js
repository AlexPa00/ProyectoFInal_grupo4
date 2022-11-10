import React from "react";
import '../Desarrolladores.css';

class Informacion extends React.Component{
  render(){
    return(
        <div className="TopDesarrolladores">
           <article className="ListaDesarrolladores">
             <img src={this.props.img} alt="" className="Foto"/>
             <ul>
              <h3 className="Nombre">{this.props.nombre}</h3>
              <p className="LU">{this.props.lu}</p>
              <p className="Descripcion">{this.props.descripcion}</p>
             </ul>
           </article>
      </div>
    )
  }
}
export default Informacion;