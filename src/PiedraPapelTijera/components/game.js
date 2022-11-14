import React,{useState, useContext} from "react";
import styled from "styled-components";
import Token from "./token";
import { WhiteButton } from './button';
import { ScoreContext } from './PPT'


const GameStyled = styled.div`
display:grid;
grid-template-columns:130px 130px;
justify-items:center;
justify-content:center;
grid-gap:50px;
margin:2em 0;
cursor:pointer;
}

& div:nth-of-type(3){
 grid-column: span 2; 
}

@media screen and (min-width: 1024px) {
  grid-template-columns: 300px 300px;
  ${({ playing, results }) => (playing && results) && 'grid-template-columns: 300px 110px 110px 300px;'}
  & div:nth-of-type(3) {
    ${({ playing, results }) => (playing && results) && 'grid-column: 2 / 4; grid-row: 1;'}
  }
 
  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  .results {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .in-game {
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    > div {
      order: 2;
    }
    > p {
      order: 1;
      margin-bottom: 2em;
    }
  }
}
.in-game {
  text-align: center;
  text-transform: uppercase;
  font-size: .8em;
  font-weight: 700;
  letter-spacing: 1px;
}
.results {
  text-align: center;
  h2 {
    text-transform: uppercase;
    font-size: 56px;
    margin: 10px;
  }
}
`
const elements = [
'papel',
'tijera',
'piedra',

]
function Game() {
  // const [score, setScore] = useState(0)
  const { score, setScore } = useContext(ScoreContext)
  const [results, setResults] = useState('')
  const [housePick, setHousePick] = useState('default')
  const [playing, setPlaying] = useState(false)
  const [pick, setPick] = useState('')
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function launchHousePick() {
    return new Promise((resolve) => {
      let pick
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)]
        setHousePick(pick)
      }, 75)
      setTimeout(() => {
        clearInterval(interval)
        resolve(pick)
      }, 2000)
    })
  }
  async function onClick(name) {
    setPlaying(true)
    setPick(name)
    const house = await launchHousePick()
     console.log(house)
     console.log('la casa eligió ', house)
    const results = playWithIA(name, house)
    setResults(results)
    if (results === 'Ganaste') {
      setScore(score + 1)
    }
  }
function playWithIA(pick, housePick) {
  if (housePick === pick) {
    return 'Empataste'
  }
  if (pick === 'papel') {
    if (housePick === 'tijera') {
      return 'Perdiste'
    }
    if (housePick === 'piedra') {
      return 'Ganaste'
    }
  }
  if (pick === 'tijera') {
    if (housePick === 'papel') {
      return 'Ganaste'
    }
    if (housePick === 'piedra') {
      return 'Perdiste'
    }
  }
  if (pick === 'piedra') {
    if (housePick === 'papel') {
      return 'Perdiste'
    }
    if (housePick === 'tijera') {
      return 'Ganaste'
    }
  }
}
function handleTryAgainClick() {
  setPlaying(false)
  setResults('')
}
  return (
    <GameStyled playing={playing} results={(results !== '')}>
      {
      !playing ? (
          <>
      <Token name="papel" onClick={onClick}/>
      <Token name="piedra" onClick={onClick}/>
      <Token name="tijera" onClick={onClick} />
      </>
        ) : (
            <>
              <div className="in-game">
                <Token playing={playing} name={pick}  />
                <p>Elegiste</p>
              </div>
              <div className="in-game">
                <Token playing={playing} name={housePick}  />
                <p>El eligio</p>
              </div>
              <div className="results">
                {
                  results && (
                    <>
                      <h2>Tu {results}</h2>
                      <WhiteButton onClick={handleTryAgainClick}>
                        Intentalo de nuevo
                      </WhiteButton>
                    </>
                  )
                }
              </div>
            </>
        )
    }
    </GameStyled>
    )
    }
  
export default Game