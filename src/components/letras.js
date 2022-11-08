function Letras(props) {
  let lista = props.letrasDichas.map(e => { return (e + " - ") })
  return (
      <h3>{lista}</h3>
  )
}
export default Letras;