import { useState } from 'react';
import './App.css'
import KeyBar from './components/key-bar/keyBar'
import StratBar from './components/key-bar/strat-bar/stratBar';
import Title from './components/key-bar/title/title';

function App() {
  const [play, setPlay] = useState(false);
  return (
    <>
    <div className='topItem'>
        <div className='titleRoot'>
          <Title/>
        </div>
      </div>
      <div className='middleItems'>
          { play &&
            <>
              <StratBar></StratBar>
              <KeyBar></KeyBar>
            </>
          }
          {!play &&
            <button onClick={() => setPlay(true)}>Play</button>
          }
      </div>
    </>
  )
}

export default App
