import React,{useContext} from "react";
import styled from "styled-components";
import { ScoreContext } from './App'

const ScoreStyled = styled.div`
background: #ffffff;
text-align:center;
padding:10px 0;
border-radius: 10px;
width: 80px;

small{
    color:#2A45C2;
    text-transform: uppercase;
    font-size: 10px;
    position:relative;
    right:13px;

}

p{
    color: red;
    font-size:50px;
    margin:0;
    font-family: Arial;
    letter-spacing: -5px;
    position:relative;
    left:-2.5px;
}
@media screen and (min-width: 768px) {
    padding: 10px 20px;
    small {
      font-size: 16px;
    }
 `
function Score(){
    const { score } = useContext(ScoreContext)
    return(
        <ScoreStyled>
            <small>Puntaje</small>
            <p>{score}</p>
            
        </ScoreStyled>
    )
}
        export default Score