import './App.css'
import KeyBar from './components/key-bar/keyBar'
import StratBar from './components/key-bar/strat-bar/stratBar';
import Title from './components/key-bar/title/title';

function App() {
  return (
    <>
    <div className='topItem'>
        <div className='titleRoot'>
          <Title/>
        </div>
      </div>
      <div className='middleItems'>
        <StratBar></StratBar>
        <KeyBar></KeyBar>
      </div>
    </>
  )
}

export default App
