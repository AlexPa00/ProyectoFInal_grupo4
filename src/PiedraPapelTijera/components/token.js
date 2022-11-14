import React from "react";
import styled,{keyframes} from "styled-components";

const shadow = keyframes`
  to {
    box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);
    transform:  scale(1.1);
  }
`
const box = keyframes`
  to {
    transform: rotateY(360deg);
  }
`

const TokenStyled = styled.div`
width: 130px;
height: 130px;
border: 15px solid ;
box-sinzing: border-box;
border-radius:50%;
display: flex;
background:#ffffff;
box-shadow: 0 5px 0;

cursor: pointer;
${({ isShadowAnimated }) => isShadowAnimated && 'box-shadow: 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.02);'}
  animation: 1s ${({ isShadowAnimated }) => isShadowAnimated ? shadow : ''} forwards;
&:active{
    transform: scale(.9);
}

img{
    width:100px;
    border-radius:40px;
    animation: 1s ${({ isShadowAnimated }) => isShadowAnimated ? box : ''};
}

.box{
    box-shadow: 0 -5px 0 #bcc1d5;
    flex:1;
    align-self:stretch;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
}
@media screen and (min-width: 1024px) {
    ${({ playing }) => playing ? 'width: 300px; height: 295px; border-width: 32px;' : 'width: 200px; height: 195px;'}
  }


`
const colors = {
    papel:{
        base:   '#516ef4',
        border: '#2543c3',

    },
    piedra:{
        base:   '#eca81e',
        border: '#c76c14',
    },
    tijera:{
        base:   '#de3a5a',
        border: '#980e31',
    }
}


function Token({ name = 'default', onClick,isShadowAnimated = false, playing }) {
    function handleClick() {
      if (onClick) {
        onClick(name)
      }
    }
    const color = colors[name]
    return(
        <TokenStyled  color={color} onClick={handleClick} name={name} isShadowAnimated={isShadowAnimated} playing={playing}>
            <div className="box">
            <img src={`./images/${name}.ico`} alt="" />
            </div>     
        </TokenStyled>
    )
}

export default Token