import React, {createContext,useState} from 'react';
//import './App.css';
import Header from './Header'
import styled from 'styled-components'; 
import Wrapper from './wrapper';
import Game from './game';
import Rules from './rules';

export const ScoreContext = createContext()

const AppStyled = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap');



body{
  font-family: 'Rubik Dirt', cursive;
}

.content-app
{
  box-sizing:border-box;
  min-height: 100vh; 
  padding:2em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
  `

function PPT() {
  const [score, setScore] = useState(0)
  return (
    <ScoreContext.Provider value={{
      score,
      setScore,
    }}>
    <AppStyled>
      <Wrapper>
        <div className="content-app">
          <Header />
          <Game />
          <Rules/>
        </div>
       </Wrapper>
    </AppStyled>
    </ScoreContext.Provider>
  )
}

export default PPT;
