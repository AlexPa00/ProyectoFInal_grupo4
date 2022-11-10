import React from "react";
import styled from "styled-components";
import Score from "./score";

const HeaderStyled = styled.div`
border : 4px solid rgba(255,255,255, .29); 
color: #ffffff;
padding: 14px 12px 14px 20px;
border-radius: 8px;
display:flex;
justify-content: space-between;

h1{
    font-size: 30px;
    line-height:16px;
    font-style: Arial;
}
 `
function Header(){
    return(
        <HeaderStyled>
            <h1>
                Piedra<br/><br/> Papel<br/><br/> Tijera
            </h1>
            <Score />
            
        </HeaderStyled>
    )
}
export default Header