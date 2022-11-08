function Image(props){
  let nFallos = props.fallos.toString();
  let ruta = "img/ahorcado"+nFallos+".png";
  return(
      <div>
          <img src={ruta} alt="Ahorcado" title="Ahorcado"/>
      </div>

  )
}
export default Image;